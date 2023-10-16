import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    gap: 26px;
    height: 44px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
` 
export const WrapperButtonMore = styled(ButtonComponent)`
   &:hover {
    color: #fff;
    background: rgb(13,92,182);
    span {
        color: #fff;
    }
   }
   width: 100%;
   text-align:center;
`
export const WrapperProducts = styled.div`
   display: flex;
   gap: 14px;
   margin-top: 20px;
   flex-wrap: wrap;
`