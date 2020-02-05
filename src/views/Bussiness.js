import React,{Component} from 'react';
import ImageBox from '../components/ImageBox'
import NavBar from '../components/NavBar'
import Merchart from '../components/Merchart'
class Bussiness extends Component{
  state = {
    round: true
  }
  //商家页面
  render(){
    return(
      <div>
        <ImageBox/>
        <NavBar
        onTabEvent={(index)=>this.onTabEvent(index)}
        >
        </NavBar>
        <Merchart
          merchantEvent={ () => this.merchantEvent() }
        ></Merchart>
      </div>
    )
  }
  onTabEvent=(index)=>{

  }

  merchantEvent = () => {
    console.log('跳转事件')
    this.props.history.push('/goods')
  }
}
export default Bussiness;