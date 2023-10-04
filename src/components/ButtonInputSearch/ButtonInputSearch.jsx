// import { Button } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton,
        bordered, backgroundColorInput = "#fff",
        backgroundColorButton = 'rgb(13,92,182)',
        colorButton = '#fff',
        borderNone = '0px',
    } = props
  return (
    <div style={{display: 'flex'}} >
          <InputComponent 
              size={size}
              placeholder={placeholder}
              bordered={bordered}
              style={{ background: backgroundColorInput , borderRadius: borderNone}}
          />
         <ButtonComponent
            size={size}
            style={{ background: backgroundColorButton, border: !bordered && 'none', borderRadius: borderNone }}
            icon={<SearchOutlined style={{ color: colorButton }} />}
            textButton={textButton}
         />
    </div>
  )
}

export default ButtonInputSearch
