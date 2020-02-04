import React, { Component } from 'react';
import RouterView from '../router/index'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const HomeWrapper = styled.div`
width: 100vw;
  height: 100vh;
  display: flex;

  flex-direction: column;
,`
const HeaderWrapper = styled.div`
height: 45px;
  background: #ccc;
`
const MainWrapper = styled.div`
width: 100vw;
flex:1;
overflow:auto
`
const FooterWrapper = styled.div`
height: 45px;
width: 100vw;
 background: #ccc;
  
`
class Home extends Component {
  //主页
  render() {
    return (
      <HomeWrapper>
        <HeaderWrapper>
          <Header {...this.props} />
        </HeaderWrapper>
        <MainWrapper>
          <RouterView routes={this.props.routes}></RouterView>
        </MainWrapper>

        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </HomeWrapper>
    )
  }
}
export default Home;