import React, { Component } from 'react';
import styled from 'styled-components'
import InputSearch from '../components/InputSearch'
const HeaderWrapper = styled.div`
position: fixed;
z-index: 15;
top: 0;
left: 0;
right: 0;
left: constant(safe-area-inset-left) !important;
left: env(safe-area-inset-left) !important;
right: constant(safe-area-inset-right) !important;
right: env(safe-area-inset-right) !important;
height: 50px;
padding: 0 10px;
background: #1C1B20;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center
`
const InputWrapper = styled.div`
width: 233px;
height: 30px;
background-color: bisque;
border-radius: 100px;

`
const AddressWrapper = styled.div`
width:150px;
height:30px;
color:#fff;
text-align: center;
line-height: 30px;

`
class Header extends Component {
  state = {
    focus: false,
    disabled: false
  }
  //
  render() {
    return (
      <HeaderWrapper>
        <AddressWrapper>山西省吕梁市</AddressWrapper>
        <InputWrapper>
          <InputSearch
            focus={this.state.focus}
            {...this.props}
            disabled={this.state.disabled}
            goToSearchEvent={() => this.goToSearchEvent()}
          />


        </InputWrapper>
      </HeaderWrapper>
    )
  }
  goToSearchEvent = () => {
    console.log(this.props, '')
    this.props.history.push('/search')
  }
}

export default Header;