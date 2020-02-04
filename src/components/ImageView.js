import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
const ImageBox=styled.div`
width: ${props => props.width};
height:${props=>props.height};
img{
  width:100%;
  height:100%;
  border-radius: 50%;
}
`

class ImageView extends Component {
  static propTypes = {
    round:PropTypes.bool,
    height:PropTypes.string,
  }


  static defaultProps = {
    round: false,
    height: 'auto'
  }
  render() {
    return (
  
    <ImageBox
      width={this.props.width}
    height={this.props.height}
    round={this.props.round}
  
    >
       <img src={this.props.src} alt=""/>
    </ImageBox>
   
  
  
       )
       
  }
  componentDidMount() {

    // console.log(this.props, 'round')
  }
}
export default ImageView;