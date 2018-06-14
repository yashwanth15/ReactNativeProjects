import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Login.js'
import ScrollViewExample from './ScrollViewExample.js'

const Routes = () ⇒ (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Home} title = "Login" initial = {true} />
         <Scene key = "scrollViewExample" component = {ScrollViewExample} title = "ScrollViewExample" />
      </Scene>
   </Router>
)
export default Routes
