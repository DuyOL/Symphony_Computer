import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import LogoLogin from '../../assets/Images/Logo-login.png'
import { Image } from 'antd'

const SignUpPage = () => {
  return (
      <div style={{
      // div phía này ôm toàn bộ left and Right
      height: "100vh",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: "rgba(0,0,0,0.53)",
    }}>
       <div style={{width: '800px', height: '445px' , borderRadius: '6px' , backgroundColor : "#fff" ,display: 'flex'}}>
      {/* Bên trái */}
      <WrapperContainerLeft>
            <h1 style={{fontSize:"24px"}}>Xin Chào ,</h1>
        <p style={{fontSize:"16px"}}>Đăng ký ngay</p>
          <InputForm style={{marginBottom: '10px'}} placeholder="...@gmail.com" />
          <InputForm style={{marginBottom: '10px'}} placeholder="password" />
          <InputForm placeholder="Nhập lại password"/>
        <ButtonComponent
                      bordered={false}
                      size={40}
                      styleButton={{
                          background: 'rgb(255,57,69)',
                          height: '48px',
                          width:'100%',
                          border: 'none',
                          borderRadius: '4px',
                          margin: '26px 0px 10px'
                      }}
                      textButton={'Đăng nhập'}
                      styleTextButton={{color: '#fff' , fontSize:'15px',fontWeight:'700'}}
          ></ButtonComponent>
          {/* <p> <WrapperTextLight>Quên mật khẩu ?</WrapperTextLight> </p> */}
          <p style={{fontSize:"14px"}}>Bạn đã có tài khoản <WrapperTextLight>Đăng nhập ngay</WrapperTextLight></p>
      </WrapperContainerLeft>

      {/* Bên phải */}
      <WrapperContainerRight>
          <Image src={LogoLogin} alt="Logo Login" preview={false} height={"203px"} width={"203px"} />
          <h3 style={{fontSize:"20px"}}>Mua sắm tại Symphony</h3>
      </WrapperContainerRight>
    </div>
   </div>
  )
}

export default SignUpPage
