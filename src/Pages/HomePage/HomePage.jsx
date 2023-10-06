import React from 'react';
import { WrapperTypeProduct } from './Style';
import slider from '../../assets/Images/Slider.png';
import slider3 from '../../assets/Images/Slider3.png';
import slider4 from '../../assets/Images/Slider4.jpg';
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import CardComponent from '../../components/CardComponent/CardComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

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
      <div id="container" style={{backgroundColor: '#efefef' ,padding:'0 120px', height:"1000px"}}>
        <SliderComponent arrImages={[slider3, slider, slider4]} /> 
        
        <div style={{marginTop: "20px" , display: "flex" , alignItems: "center" , gap:"20px"}}>
          <CardComponent />
        </div>
        <NavbarComponent />
      </div>
    </>
  )
}

export default HomePage
