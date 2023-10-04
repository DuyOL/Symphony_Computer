import React from 'react';
import { WrapperTypeProduct } from './Style';
import  slider1  from '../../assets/Images/Slider1.jpg';
import  slider2  from '../../assets/Images/Slider2.jpg';
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'

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
      <div id="container" style={{backgroundColor: '#efefef' ,padding:'0 120px'}}>
          <SliderComponent arrImages={ [slider1 , slider2] }/> 
      </div>
    </>
  )
}

export default HomePage
