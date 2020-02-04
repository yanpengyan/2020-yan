import React, { Component } from 'react';
import styled from 'styled-components'
const NavBox = styled.div`
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
class NavBar extends Component {
  state = {
    titleArr: ['综合排序', '销量最高', '距离最近', '筛选'],
    tabIndex: 0,
  }
  render() {
    return (
      <NavBox>
        {
          this.state.titleArr.map((iten, index) => {
            return (
              <span key={index}
                className={index === this.state.tabIndex ? 'active' : ''}
                onClick={() => this.tabClick(index)}
              >{iten}</span>
            )
          })
        }
      </NavBox>
    )
  }
  tabClick = (index) => {
    console.log(index, 'aaa')
    this.setState(() => ({
      tabIndex: index
    }))

    console.log(this.state.tabIndex)
    const { onTabEvent } = this.props
    if (onTabEvent) {
      onTabEvent(index)
    }
  }
}
export default NavBar;