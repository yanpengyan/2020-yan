import React, { Component } from 'react';
import styled from 'styled-components'
import ImageView from '../components/ImageView'
const MerchartWrapper = styled.div`
width:100%;

`
const DlBox = styled.dl`
display:flex;
width: 100%;
padding: 5px;
background: #ccc;
`
class Merchart extends Component {
  render() {
    return (
      <MerchartWrapper>
        <DlBox onClick={ () => this.onMerchantClick() }>
         <dt > 
          <ImageView
           width="76px"
           height="57px"
           src="https://p0.meituan.net/waimaipoi/6c86a9774d19a649e7c4a5f8b1044f6821905.jpg@114h_80Q_0e_1l.webp?cimage=true"
           
        />  
         </dt>
         <dd>
           <div className="title">晋城花店-麦当劳（新市街店）</div>  
           <div className="rate">⭐️</div>
           <div className="shipping-news">起送：5 配送：5</div>
         </dd>  
        </DlBox> 
      </MerchartWrapper>
    )
  }
  onMerchantClick = () => {
    console.log('我在子组件中')
    const { merchantEvent } = this.props
    merchantEvent && merchantEvent()
  }
}
export default Merchart