import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
const SearchWrapper = styled.div`
height: 100%;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border:none;
    width: 90%;
    height: 90%;  
  }
`
class InputSearch extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    focus: PropTypes.bool,
    disabled: PropTypes.bool
  }

  //
  static defaultProps = {
    focus: false,
    disabled: true
  }
  state = {
    inputValue: '',
  }
  render() {
    return (
      <SearchWrapper>
        <input type='text'
          value={this.state.inputValue}
          onChange={(e) => this.onChangeEvent(e)}
          ref={inputDom => this.inputDom = inputDom}
          disabled={this.props.disabled ? 'disabled' : ''}
          onClick={() => { this.goToSearchPage() }}
        />
      </SearchWrapper>

    )
  }
  componentDidMount() {
    // 自动获取焦点
    if (this.props.focus) {
      this.inputDom.focus()
    }
  }
  onChangeEvent = (e) => {
    console.log(e.target.value)
    this.setState(()=>({
      inputValue: e.target.value
    }))
  }
  goToSearchPage = () => {
    const { goToSearchEvent } = this.props;
    goToSearchEvent()
  }
}


export default InputSearch;