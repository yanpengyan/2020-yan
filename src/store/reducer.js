const defaultState={
  goodsData:[],
  goods:[],//左边数据
  leftIndex:0,//左边下标
  cartData: [],//购物车数据
}
export default (state = defaultState, action)=>{
  const newState=JSON.parse(JSON.stringify(state))
  if(action.type==='init_goods'){
    newState.goodsData = action.data

    console.log(newState.goodsData,'.....')
    newState.goods=action.data.goods
   
    return newState;
  }
  if(action.type==='init_left'){
    newState.leftIndex=action.index
    console.log(newState.leftIndex)
    return newState;
  }
 //加入购物车
  if(action.type==='init_add'){
   const goods= newState.goods[ newState.leftIndex].foods[action.index]

    console.log(goods)
    if(goods){
      goods.count++
    }else{
      newState.cartData.push(goods)
    }
    return newState;
  }
  return state
}