import React, { Component } from 'react';

import styled from 'styled-components'
const ListWrapper=styled.div`
height: 80px;
display:flex;
span {
  flex:1;
  display: flex;
  justify-content:center;
  align-items: center;
}
.active {
  color: red;
}
`
class GoodList extends Component {
  state = {
    list: ['点菜','评价','商家'],
    tabIndex:0,
  }

render() {
  return(
  <ListWrapper>
   
    {
     this.state.list.map((item,index)=>{
     return<span key={index}
     className={index === this.state.tabIndex ? 'active' : ''}
     onClick={() => this.tabClick(index)}
     >{item}</span>
     })
   }
  
  
  </ListWrapper>
  )
}
tabClick(index){
  console.log(index)
  this.setState(() => ({
    tabIndex: index
  }))
}
}
export default GoodList;