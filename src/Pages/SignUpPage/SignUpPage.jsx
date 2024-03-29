import { Image } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputForm from '../../components/InputForm/InputForm'
import LogoLogin from '../../assets/Images/Logo-login.png'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import * as message from '../../components/Message/Message'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
const SignUpPage = () => {
  const navigate = useNavigate()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('')
  const [confirmPassword ,setConfirmPassword] = useState('')

  const handleOnchangeEmail = (value) => {
      setEmail(value)
  }

  const mutation = useMutationHooks(
    data => UserService.signUpUser(data)
  )

  const {data , isLoading , isSuccess , isError} = mutation

  useEffect (() => {
      if(isSuccess){
        message.success()
        handleNavigateSignIn()
      }else if (isError) {
        message.error()
      }
  }, [isSuccess,isError])
  const handleOnchangePassword = (value) => {
    setPassword(value)
  }
  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }
  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }
  const handleSignUp = () => {
    mutation.mutate({email , password , confirmPassword})
  }
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
          <InputForm style={{marginBottom: '10px'}} placeholder="...@gmail.com" 
          value = {email} onChange={handleOnchangeEmail} />
          <div style={{position: 'relative',marginBottom: '10px'}}>
              <span
              onClick={() => setIsShowPassword(!isShowPassword) }
                style={{
                  zIndex:10,
                  position:'absolute',
                  top: '10px',
                  right:'8px'
                }}
              >{
                isShowPassword ? (
                  <EyeFilled />
                ): (
                  <EyeInvisibleFilled />
                )
              }
              </span>
              <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              value = {password} onChange={handleOnchangePassword}
            />
          </div>
          <div style={{position: 'relative'}}>
              <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword) }
                style={{
                  zIndex:10,
                  position:'absolute',
                  top: '10px',
                  right:'8px'
                }}
              >{
                isShowConfirmPassword ? (
                  <EyeFilled />
                ): (
                  <EyeInvisibleFilled />
                )
              }

              </span>
              <InputForm
              placeholder="Nhập lại password"
              type={isShowConfirmPassword ? "text" : "password"}
              value = {confirmPassword} onChange={handleOnchangeConfirmPassword}
            />
          </div>
          {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
          <Loading isLoading={isLoading}>
        <ButtonComponent
                      disabled={!email.length || !password.length || !confirmPassword.length}
                      onClick={handleSignUp}
                      size={40}
                      styleButton={{
                          background: 'rgb(255,57,69)',
                          height: '48px',
                          width:'100%',
                          border: 'none',
                          borderRadius: '4px',
                          margin: '26px 0px 10px'
                      }}
                      textButton={'Đăng ký'}
                      styleTextButton={{color: '#fff' , fontSize:'15px',fontWeight:'700'}}
          ></ButtonComponent>
          </Loading>
          <p style={{fontSize:"14px"}}>Bạn đã có tài khoản 
          <WrapperTextLight onClick={handleNavigateSignIn}>Đăng nhập </WrapperTextLight></p>
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
