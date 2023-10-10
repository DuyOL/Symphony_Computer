import { Col, Image, Row } from 'antd'
import React from 'react'
import {
    StarFilled,
    PlusOutlined,
    MinusOutlined,
} from '@ant-design/icons';
import imageProduct from '../../assets/Images/imagessmall.jpg'
import imageProductSmall from '../../assets/Images/Sanpham 1.4.jpg'
import {
    WrapperAddressProduct,
    WrapperInputNumber,
    WrapperPriceProduct,
    WrapperPriceTextProduct,
    WrapperQualityProduct,
    WrapperStyleColImage,
    WrapperStyleImageSmall,
    WrapperStyleNameProduct,
    WrapperStyleTextSell
} from './style'

const ProductDetailsComponent = () => {
    const onChange = () => {

    }
  return (
      <Row style={{padding : '16px' ,background: '#fff'}}>
          <Col span={10}>
              <Image src={imageProductSmall} alt="image product" preview={true} />
              <Row style={{paddingTop: '10px' ,justifyContent: 'space-between'}}>
                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={true} />
                  </WrapperStyleColImage>

                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={true} />
                  </WrapperStyleColImage>

                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={true} />
                  </WrapperStyleColImage>

                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={true} />
                  </WrapperStyleColImage>

                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={true} />
                  </WrapperStyleColImage>
              </Row>
          </Col>
          <Col span={14}>
              <WrapperStyleNameProduct>
                  SSD Target 120gb || Sata III || Bảo Hành 3 năm
              </WrapperStyleNameProduct>
              <div style={{marginLeft:'10px',}}>
                  <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                  <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                  <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                  <WrapperStyleTextSell> | Đã bán 1000 +</WrapperStyleTextSell>
              </div>
              <WrapperPriceProduct>
                  <WrapperPriceTextProduct>240.000</WrapperPriceTextProduct>
              </WrapperPriceProduct>
              <WrapperAddressProduct>
                  <span style={{marginLeft: '10px', fontSize:'15px'}}>Giao đến</span>
                  <span className='address'>Q.1-Bến nhà rồng- Hồ Chí Minh</span>
                  <span className='change-address' style={{marginLeft: '10px'}}>- Đổi địa chỉ</span>
              </WrapperAddressProduct>
              <div>
                  <div style={{ marginLeft: '10px', }} >Số lượng</div>
                  <WrapperQualityProduct >
                      <MinusOutlined  style={{ color: '#000',fontSize: '20px' }} />
                      <WrapperInputNumber style={{width: '40px' , borderTop: 'none', borderBottom: 'none'}} defaultValue={3} onChange={onChange} size='small' />
                      <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />            
                  </WrapperQualityProduct>
              </div>
         </Col>
      </Row>
  )
}

export default ProductDetailsComponent
