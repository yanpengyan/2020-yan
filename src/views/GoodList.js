import React, { Component } from 'react';
import styled from 'styled-components'
import ImageView from '../components/ImageView'
import { NavBar, Icon } from 'antd-mobile';
import GoodsNav from '../components/GoodsNav'
import BaseList from '../components/BaseList'
import CartCon from '../components/CartList'
const GoodsWrapper = styled.div`
background-color: rgb(46, 47, 59);

.top {
 .am-navbar-light {
   background-color: rgb(46, 47, 59);
 }
 .bottom{
 
 }
}
`
class GoodList extends Component {
  state = {
    list: ['点菜', '评价', '商家']
  }
  render() {
    return (
      <div>
        <GoodsWrapper>
          <div className="top">
            <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => this.props.history.go(-1)}
            >

            </NavBar>
            <ul className="bottom">
              <li>
                <ImageView
                  width='85px'
                  height='64px'
                  src="https://p0.meituan.net/waimaipoi/6c86a9774d19a649e7c4a5f8b1044f6821905.jpg@114h_80Q_0e_1l.webp?cimage=true"

                />
              </li>
            </ul>
          </div>
        </GoodsWrapper>
        <GoodsNav> </GoodsNav>
         <BaseList></BaseList> 
       <CartCon></CartCon>
      </div>

    )
  }
  tabEvent = (index) => {
    console.log(index)
  }
}
export default GoodList;