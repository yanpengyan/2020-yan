import React, { Component } from 'react';
import styled from 'styled-components'
const CartWrapper = styled.div`
width: 100vw;
height: 10vh;
position:fixed;
bottom:0;
left:0;
z-index:1;
.mask {
  width: 100%;
  height:100%;
  position: absolute;
  background: #000;
  opacity: .6;
  
}
.tip {
  width: 100%;
  height:50%;
  background: #fff;
  left: 0;
  bottom: 50px;
  position: absolute;
  max-height: 310px;
  transform: translateY(295px);
  transition: all 500ms;
  overflow:auto;
}

`
const CartCon = styled.div`
width: 100%;
height: 50px;
position: absolute;
left:0;
bottom:0;
background: #ccc;
display: flex;
div{
  display:flex;
  justify-content: center;
  align-items: center;
 }
 .cart-icon {
  flex:2; 
  span {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: orange;
    border-radius: 50%;
    font-size:20px;
  }
  .cart-total {
    flex:4; 
  }
  .cart-cal {
    flex:4; 
  }
 }
`
class GoodList extends Component {
  state = {
    isCheck: false,
  }
  render() {
    const { isCheck } = this.state
    return (
      <CartWrapper ref={ (wrapper) => this.wrapper = wrapper }>
        <div className='mask'>
          <div className='tip' ref={(tipDom) => this.tipDom = tipDom }>

          </div>
        </div>
        <CartCon>
          <div className="cart-icon" onClick={() => this.showCart()}>
            <span>11</span>
          </div>
          <div className="cart-total">11</div>
          <div className="cart-cal">去结算</div>
        </CartCon>
      </CartWrapper>
    )
  }
  showCart = () => {
    let isCheck = this.state.isCheck
    isCheck = !isCheck;
    this.setState(() => ({
      isCheck: isCheck
    }))
    if(isCheck){
      this.wrapper.style.height='100%'
      this.tipDom.style.transform=`translateY(0)`
    }else{
      this.wrapper.style.height='100px'
      this.tipDom.style.transform=`translateY(400px)`
    }
  }
}
export default GoodList;