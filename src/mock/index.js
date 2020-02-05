import Mock from 'mockjs'
import Goodsdata from './goods.json'
// console.log(Goodsdata)
const data=Mock.mock({
  'list|10':[
    {
      "id": "@id",
      "img": "@image(100x100, @color, @ctitle)",
      "text": "@city"
    }
  ]

})
Mock.mock('/api/list',data.list)
Mock.mock('/api/goods',Goodsdata)