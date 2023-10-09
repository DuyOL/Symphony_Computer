import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/Images/test.jpg'
import imageProductSmall from '../../assets/Images/test2.webp'
import { WrapperStyleColImage, WrapperStyleImageSmall } from './style'

const ProductDetailsComponent = () => {
  return (
      <Row style={{padding : '16px' ,background: '#fff'}}>
          <Col span={10}>
              <Image src={imageProductSmall} alt="image product" preview={false} />
              <Row style={{paddingTop: '10px' ,justifyContent: 'space-between'}}>
                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={false} />
                  </WrapperStyleColImage>

                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={false} />
                  </WrapperStyleColImage>

                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={false} />
                  </WrapperStyleColImage>

                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={false} />
                  </WrapperStyleColImage>

                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={false} />
                  </WrapperStyleColImage>

                  <WrapperStyleColImage span={4}>
                      <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={false} />
                  </WrapperStyleColImage>
              </Row>
          </Col>
          <Col span={14}>Col - 12</Col>
      </Row>
  )
}

export default ProductDetailsComponent
