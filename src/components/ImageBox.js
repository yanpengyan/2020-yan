import React, { Component } from 'react';
import ImageView from '../components/ImageView'
import styled from 'styled-components'
import axios from 'axios'
import '../mock/index'

const ImageBox = styled.div`
width: 100vw;
display:flex;
flex-wrap:wrap;
ul{
  width:18%;
  margin: 3px;
  li {
    &:nth-child(2) {
      width: 100%;
      overflow: hidden;
    }
  }
}
`
class Footer extends Component {
  state = {
    round: true,
    list: [],
  }
  render() {
    return (
      <ImageBox>
       {
         this.state.list.map((item,index)=>{
           return(
             <ul key={item.id}>
         <li>
           <ImageView
            src={item.img}
            round={this.state.round}
            width={'60px'}
            height={'60px'}
           />
         </li>
             </ul>
           )
         })
       }
      </ImageBox>
    )
  }
  componentDidMount() {
    axios.get('/api/list').then(res => {
      // console.log(res.data,'-----')
      this.setState(() => ({
        list: res.data
      }))
   
    })
  }

}

export default Footer;