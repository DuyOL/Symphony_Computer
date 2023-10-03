import { Button, Input } from 'antd'
import React from 'react'
import {
   SearchOutlined
} from '@ant-design/icons';
const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton,
        bordered, backgroundColorInput = "#fff",
        backgroundColorButton = 'rgb(13,92,182)',
        colorButton = '#fff',
        borderNone = '0px',
    } = props
  return (
    <div style={{display: 'flex'}} >
          <Input size={size}
              placeholder={placeholder}
              bordered={bordered}
              style={{ background: backgroundColorInput , borderRadius: borderNone}}
          />
          <Button
              size={size}
              style={{ background: backgroundColorButton ,border: !bordered && 'none',borderRadius: borderNone }}
              icon={<SearchOutlined color={colorButton} />}>
              <span style={{color:colorButton}}>{textButton}</span>  
          </Button>
    </div>
  )
}

export default ButtonInputSearch
