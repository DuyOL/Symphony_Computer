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
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ProductDetailsComponent = () => {
    const onChange = () => {

    }
  return (
      <Row style={{padding : '16px' ,background: '#fff', borderRadius:'4px'}}>
          <Col span={10} style={{borderRight: '1px solid #e5e5e5' ,paddingRight: '8px'}}>
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
          <Col span={14} style={{paddingLeft: '10px'}}>
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
              <div style={{margin: '10px 0px 20px' , padding:'10px 0' ,borderTop:'1px solid #e5e5e5',borderBottom: '1px solid #e5e5e5'}}>
                  <div style={{ marginLeft: '10px',marginBottom: '10px' }} >Số lượng</div>
                  <WrapperQualityProduct >
                    <button style={{border :'none' ,background: 'transparent'}}>
                      <MinusOutlined  style={{ color: '#000',fontSize: '20px' }} />                          
                    </button>
                      <WrapperInputNumber style={{ width: '60px', borderTop: 'none', borderBottom: 'none' }} defaultValue={3} onChange={onChange} size='small' />
                    <button style={{border :'none' , background: 'transparent'}}>
                      <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />                   
                    </button >
                  </WrapperQualityProduct>
              </div>
              <div style={{ display: 'flex' ,alignItems:'center' ,gap: '12px', marginLeft: '10px'}}>
                  <ButtonComponent
                      size={40}
                      styleButton={{
                          background: 'rgb(255,57,69)',
                          height: '48px',
                          width:'220px',
                          border: 'none',
                          borderRadius: '4px',
                      }}
                      textButton={'Chọn mua'}
                      styleTextButton={{color: '#fff' , fontSize:'15px',fontWeight:'700'}}
                  ></ButtonComponent>
                  <ButtonComponent
                      size={40}
                      styleButton={{
                          background: '#fff',
                          height: '48px',
                          width:'220px',
                          border: '1px solid rgb(13,92,182)',
                          borderRadius: '4px',
                      }}
                      textButton={'Mua trả sau'}
                      styleTextButton={{color: 'rgb(13,92,182)', fontSize:'15px'}}
                  ></ButtonComponent>
              </div>
         </Col>
      </Row>
  )
}

export default ProductDetailsComponent
