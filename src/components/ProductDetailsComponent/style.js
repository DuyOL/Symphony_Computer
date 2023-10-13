import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
   height: 64px;
   width: 64px;
`
export const WrapperStyleColImage = styled(Col)`
   flex-basis: unset;
   display: flex;
`
export const WrapperStyleNameProduct = styled.h1`
   color: rgb(36,36,36);
   font-size: 24px;
   font-weight: 300;
   line-height: 32px;
   margin-left: 10px;
   word-break: break-word;
`
export const WrapperStyleTextSell = styled.span`
   font-size: 15px;
   line-height: 24px;
   color: rgb(120,120,120);
`
export const WrapperPriceProduct = styled.div`
   background: rgb(250,250,250);
   border-radius : 4px;
`

export const WrapperPriceTextProduct = styled.h1`
   font-size: 32px;
   line-height: 40px;
   margin-top: 10px;
   font-weight: 500;
   padding: 10px;
`
export const WrapperAddressProduct = styled.div`
   span.address{
      margin-left: 3px;
      font-size:: 15px;
      font-weight:500;
      overflow: hidden;
      line-height: 24px;
      white-space:nowrap;
      text-decoration: underline;
      text-overflow: ellipsis;
   };
   span.change-address{
      color: rgb(11,116,229);
      font-size:16px;
      line-height: 24px;
      font-weight:500;
   }
`
export const WrapperQualityProduct = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  border: 1px solid #ccc;
  width: 120px;
  border-radius:4px;
  margin-left: 10px
`
export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number-handler-wrap{
      display: none;
   }
`

