import React, { useState } from 'react';
import Dropdown from 'antd/lib/dropdown';
import { Button, Input } from 'antd';
import { PanelColor } from '../../style';

const InputColor = () => {
  const [colorSelected, setColorSelected] = useState('');

  const handleChange = color => {
    setColorSelected(color.color);
    console.log(color);
  };

  const overlay = (
    <div>
      <PanelColor
        color={colorSelected}
        enableAlpha={false}
        onChange={handleChange}
      />
    </div>
  );
  return (
    <>
      <Input
        value={colorSelected || ''}
        onChange={e => {
          setColorSelected(e.target.value);
        }}
        suffix={
          <Dropdown trigger={['click']} overlay={overlay}>
            <Button style={{ background: colorSelected }}> </Button>
          </Dropdown>
        }
      />
    </>
  );
};

InputColor.propTypes = {};

export default InputColor;
