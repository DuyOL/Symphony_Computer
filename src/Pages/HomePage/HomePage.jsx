import React from 'react';
import { WrapperButtonMore, WrapperTypeProduct } from './Style';
import slider from '../../assets/Images/Slider.png';
import slider3 from '../../assets/Images/Slider3.png';
import slider4 from '../../assets/Images/Slider4.jpg';
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import CardComponent from '../../components/CardComponent/CardComponent';
// import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const HomePage = () => {
  const arr = ['Màn Hình', 'Điện Thoại', 'Laptop', 'Ổ Cứng' , 'Card đồ họa']
  return (
    <>
       <div style={{ padding: '0 120px' }}>
      <WrapperTypeProduct>
      {arr.map((item) => {
        return (
          <TypeProduct name={item} key={item} />
        )
      })}
      </WrapperTypeProduct>
    </div>
      <div id="container" style={{backgroundColor: '#efefef',padding: '0 120px', height: "1000px",}}>
        <SliderComponent arrImages={[slider3, slider, slider4]} /> 
        <div style={{marginTop: "20px" , display: "flex" , alignItems: "center" ,gap:'30px' ,flexWrap:'wrap'}}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
        <div style={{display:'flex' , width: '100%' ,justifyContent:'center', marginTop: '10px'}}>
           <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
          border: '1px solid rgb(11 , 116, 229)',
          color: 'rgb(11,116,229)',
          width: '240px', height: '38px', borderRadius: '4px',
        }}
          styleTextButton={{fontWeight:500} } />
        </div>
        {/* <NavbarComponent /> */}
      </div>
    </>
  )
}

export default HomePage
