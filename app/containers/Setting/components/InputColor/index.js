import React, { useState } from 'react';
import Dropdown from 'antd/lib/dropdown';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { PanelColor } from '../../style';
import Input from '../../../../res/components/Input';

const InputColor = ({ onChange }) => {
  const [colorSelected, setColorSelected] = useState('');

  const handleChange = color => {
    setColorSelected(color.color);
    if (color) {
      onChange(color.color);
    }
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

InputColor.propTypes = {
  onChange: PropTypes.func,
};

export default InputColor;
