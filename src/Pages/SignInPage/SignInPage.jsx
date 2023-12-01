import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import LogoLogin from '../../assets/Images/Logo-login.png'
import {  Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
// import { useMutation } from 'react-query'
// import * as message from '../../components/Message/Message'
import { jwtDecode } from "jwt-decode";
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/slides/userSlide'
const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  const { data , isLoading , isSuccess } = mutation

  useEffect(() => {
    if(isSuccess){
        navigate('/')
        localStorage.setItem('access_token', data?.access_token)
        if(data?.access_token){
          const decoded = jwtDecode(data?.access_token)
          console.log('decode',decoded)
          if(decoded?.id){
            handleGetDetailsUser(decoded?.id, data?.access_token)
          }
        }
    }
  }, [isSuccess])
  const handleGetDetailsUser = async (id,token) => {
    const res = await UserService.getDetailsUser(id,token)
    dispatch(updateUser({...res?.data, access_token: token}))
  }
  console.log('mutation' , mutation)
  const handleNavigateSignUp = () => {
    navigate('/sign-up')
  }
  const handleOnchangeEmail = (value) => {
    setEmail(value)
}
const handleOnchangePassword = (value) => {
  setPassword(value)
}
const handleSignIn = () => {
  mutation.mutate({
    email,
    password
  })
  console.log('sign-in' , email , password)
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
        <p style={{fontSize:"16px"}}>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm style={{marginBottom: '10px'}} placeholder="...@gmail.com"
          value={email} onChange = {handleOnchangeEmail} />
          <div style={{position: 'relative'}}>
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
              value={password} onChange = {handleOnchangePassword} />
          </div>
          {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
          <Loading isLoading={isLoading}>
        <ButtonComponent
                      disabled={!email.length || !password.length }
                      onClick={handleSignIn}
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
          </Loading>
          <p style={{cursor:'pointer'}}> <WrapperTextLight>Quên mật khẩu ?</WrapperTextLight> </p>
          <p style={{fontSize:"14px"}}>Chưa có tài khoản <WrapperTextLight onClick={handleNavigateSignUp} style={{cursor:'pointer'}}>Tạo tài khoản</WrapperTextLight></p>
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

export default SignInPage