import React, { useEffect, useState } from 'react';
import type { UploadFile } from 'antd/es/upload/interface';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import { v4 as uuidv4 } from 'uuid';

const actionApi = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';

interface ImgProps {
  // 默认值url
  value?: string;
  // 上传地址
  action?: string;
  // 数量限制
  limit?: number;
  // 变更的回调
  onChange?: (value: string) => void;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const FUploadImg: React.FC<ImgProps> = (props) => {
  const { value = '', onChange, limit = 1, action = actionApi } = props;
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  /**
   * 初始化传入的值
   */
  const stringToList = () => {
    if (!value) return;
    const strArr = value.split(',');
    const creatFileArr: UploadFile[] = strArr.map((url) => {
      return {
        uid: uuidv4(),
        name: 'image.png',
        status: 'done',
        url,
      };
    });
    // console.log("-> creatFileArr", creatFileArr);
    setFileList(creatFileArr);
  };

  /**
   * 格式化返回的值
   * @param newFileList
   */
  const formatFileArr = (newFileList: UploadFile[]) => {
    const arr = newFileList.filter((file) => {
      return file.status !== 'error' && file.status !== 'uploading';
    });
    const urlString = arr.map((file) => file.response.url || file.url).join(',');
    if (urlString !== value) {
      if (onChange) {
        onChange(urlString);
      }
    }
  };

  /**
   * 关闭图片预览
   */
  const handleCancel = () => setPreviewOpen(false);

  /**
   * 图片预览
   * @param file
   */
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  /**
   * 监听文件变更
   * @param newFileList
   */
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    // console.log("-> newFileList", newFileList);
    formatFileArr(newFileList);
    return setFileList(newFileList);
  };

  useEffect(() => {
    stringToList();
  }, [value]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  );
  return (
    <div>
      <Upload
        action={action}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= limit ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
};
export default FUploadImg;
