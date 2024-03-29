import styled from "styled-components";
import { Row } from "antd";
export const WrapperHeader = styled(Row)`
   background-color: rgb(26,148,255);
   align-items: center;
   gap: 20px;
   flex-wrap:nowrap;
   width: 1270px;
   padding: 10px 0;
`
export const WrapperTextHeader = styled.span`
   font-size :18px;
   color: #fff;
   fontweight:bold;
   margin-left:7px;
   text-align:left;
`
export const WrapperHeaderAccount = styled.span`
   display: flex;
   align-items: center;
   color: #fff;
   gap: 10px;
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`
