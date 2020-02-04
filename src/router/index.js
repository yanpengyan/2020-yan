import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
const RouterViews = (props) => {
  const routes=props.routes.filter(val=>val.component)
  const redirectArr=props.routes.filter(val=>val.redirect)

  return (
    <Switch>
      {
        routes.map((item, index) => {
          return (
          <Route key={index} path={item.path} render={props=>{
            return <item.component {...props} routes={item.children}/>
          }}/>
          )
        })
      }
    {
      redirectArr.map((item,index)=>{
      return <Redirect key={index} to={item.redirect}/>
      })
    }
    </Switch>
  )
}
export default RouterViews;