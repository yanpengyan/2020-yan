import Mock from 'mockjs'
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