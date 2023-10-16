import React from 'react';
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './Style';
import slider from '../../assets/Images/Slider.png';
import slider3 from '../../assets/Images/Slider3.png';
import slider4 from '../../assets/Images/Slider4.jpg';
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import CardComponent from '../../components/CardComponent/CardComponent';

const HomePage = () => {
  const arr = ['Màn Hình', 'Điện Thoại', 'Laptop', 'Ổ Cứng' , 'Card đồ họa']
  return (
    <>
       <div style={{ width: '1270px' , margin:'0 auto'}}>
      <WrapperTypeProduct>
      {arr.map((item) => {
        return (
          <TypeProduct name={item} key={item} />
        )
      })}
      </WrapperTypeProduct>
    </div>
    <div className='body' style={{ width: '100%', backgroundColor: '#efefef', }}>
      <div id="container" style={{height: "1000px", width:'1270px' , margin: '0 auto'}}>
        <SliderComponent arrImages={[slider3, slider, slider4]} /> 
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
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
    </div>
    </>
  )
}

export default HomePage
