import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style';
import {
 StarFilled
} from '@ant-design/icons';
import logo from '../../assets/Images/Genuine.png';

const CardComponent = () => {
  return (
     <WrapperCardStyle
          hoverable
          headStyle={{width: '200px' , height : '200px'}}
          style={{ width: 200 }}
          bodyStyle={{padding: '10px' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
      <img
        src={logo}
              style={{
                width: '68px',
                height: '14px',
                position: 'absolute',
                top: -1,
                left: -1,
                borderTopLeftRadius: '3px'
              }} />
          <StyleNameProduct> SSD Target 120gb</StyleNameProduct>
          <WrapperReportText>
            <span style={{marginRight: '4px'}}>
              <span>5.0</span>
              <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
            </span>
              <WrapperStyleTextSell> | Đã bán 1000 +</WrapperStyleTextSell>
          </WrapperReportText>
              <WrapperPriceText>
                  <span style={{marginRight: '8px'}}> 240.000 VND</span>
              <WrapperDiscountText>
                  -5%
              </WrapperDiscountText>
              </WrapperPriceText>
     </WrapperCardStyle>
  )
}

export default CardComponent
