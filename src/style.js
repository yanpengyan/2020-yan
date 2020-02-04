import {createGlobalStyle} from 'styled-components'

export const Style=createGlobalStyle`
body{
  /* 属性控制元素在移动设备上是否使用滚动回弹效果. */
  -webkit-overflow-scrolling: touch; 
  overflow-y:auto;
  /* 不显示默认的高亮颜色 */
  -webkit-tap-highlight-color: transparent;
}
html{
  color:#000;
  background:#FFF;
}
body, div, dl, dt, dd, ul, ol, li,h1, h2, h3, h4, h5, h6, pre, code,form, fieldset, legend, input, button,textarea, p, blockquote, th, td {
margin: 0;
padding: 0;
}
fieldset, img{
border:none;
}
input,select,textarea{
  outline:none;  /* 选中文本框取消蓝边 */
  /*清除移动端默认的表单样式*/
  -webkit-appearance: none;
} 
/* placeholder属性 */
::-webkit-input-placeholder {
color: mediumvioletred;
text-indent: 5px;
}
textarea{
  /* 控制textarea不可由用户调整尺寸大小
      both 可以由用户调整尺寸大小
  */
  resize:none;
}
a{
  text-decoration:none;  /* 取消下划线 */
  color: #333;
  /*去除点击按钮，有灰色阴影*/
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
table {
border-collapse:collapse;  /* 为表格设置合并边框模型 实线 */
border-spacing:0; /* 外线间距 */
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
font-style:normal;
font-weight:normal;
}
ol,
ul {
list-style:none;
}
caption,
th {
text-align:left;
}
/* 万能清除浮动*/

.clearfix:after{
  content: '';
  display:block;
  clear:both;
}

body {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}
`