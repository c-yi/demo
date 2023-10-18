import React, { useState } from 'react';

import { SketchPicker } from 'react-color';

interface ColorProps {
  value?: string;
  onChange?: (value: string) => void;
}

const FColor: React.FC<ColorProps> = (props) => {
  const { value = '#fff', onChange } = props;
  const [show, setShow] = useState(false);

  const colorChange = (color: { hex: string }) => {
    if (onChange) {
      onChange(color.hex);
    }
  };

  return (
    <div className={'relative'} onMouseOver={() => setShow(true)}>
      <div className={'flex'}>
        <div className={'flex-1 h-[30px] rounded-[6px]'} style={{ backgroundColor: value }} />
        <div className={'ml-[5px]'}> {value}</div>
      </div>
      {show && (
        <div className={'absolute z-10 pt-4'} onMouseOut={() => setShow(false)}>
          <SketchPicker
            width={300}
            style={{ width: '100%' }}
            color={value}
            onChangeComplete={colorChange}
          />
        </div>
      )}
    </div>
  );
};
export default FColor;
