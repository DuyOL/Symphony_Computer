import React from 'react'
import { Col } from 'antd';
import { WrapperHeader , WrapperHeaderAccount, WrapperTextHeader ,WrapperTextHeaderSmall} from './style';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
       <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>
             SYMPHONY
          </WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            textButton="Tìm kiếm"
            placeholder="Tìm sản phẩm,danh mục mong muốn..."
         />
        </Col>
        <Col span={6} style={{display: 'flex' ,gap: '20px'}}>
          <WrapperHeaderAccount>
             <UserOutlined style={{fontSize: '30px'}} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập / Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{fontSize: '30px' ,color:'#fff'}}/>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
       </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
