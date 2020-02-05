import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios'
import '../mock/index'
const BaseWrapper = styled.div`
width:100%;
display:flex;
.left{
  flex:4;
ul{
  width:100$;

  li{
    height:50px;
    text-align: center;
    line-height:50px;
    
  }
}
}
.right{
  flex:6;
  button{
    width:30px;
    height:20px;
  }
}
`
class GoodList extends Component {
  state = {
    leftIndex: 0,
  }
  render() {
    const { goods, leftClick,removeCart ,addCart} = this.props

    return (
      <BaseWrapper >
        <div className='left'>
          <ul>
            {
              goods.length && goods.map((item, index) => {
                return <li key={index}
                  onClick={() => leftClick(index)}
                >{item.name}</li>
              })
            }
          </ul>

        </div>
        <div className='right'>
{
  
     goods.length && goods[this.props.leftIndex].foods.map((item,index)=>{
     return(
     <div key={index}>
     <h4>{item.name}</h4>
     <p>{item.info}</p>
     <div>{item.description}</div>
     <h2>{item.price}</h2>
     <button onClick={()=>removeCart(index)}>-</button>
     <span>{item.count}</span>
     <button onClick={()=>addCart(index)}>+</button>
     </div>
     )
   })
}
        </div>
      </BaseWrapper>
    )
  }
  componentDidMount() {
    const { leftEvent } = this.props
    leftEvent()
  }
}
const mapStateToProps = (state) => {
  return {
    leftIndex: state.leftIndex,
    goods: state.goods
  }
}
const mapDispatchProps = (dispatch) => {
  return {
    leftEvent() {
      axios.get('/api/goods').then(res => {

        const data = res.data
        console.log(data)
        const action = {
          type: 'init_goods',
          data
        }
        dispatch(action)
      })
    },
    leftClick(index) {

      const action = {
        type: 'init_left',
        index
      }
      dispatch(action)
    },
    removeCart(index){
      const action = {
        type: 'init_remove',
        index
      }
      dispatch(action)
    },
    addCart(index){
      const action = {
        type: 'init_add',
        index
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchProps)(GoodList)