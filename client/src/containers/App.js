import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import NewPosts from './NewPosts'
import ViewComments from './ViewComments'
import ViewPosts from './ViewPosts'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/NewPosts">NewPosts</Link></li>
        <li><Link to="/ViewComments">ViewComments</Link></li>
        <li><Link to="/ViewPosts">ViewPosts</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/NewPosts" component={NewPosts}/>
      <Route path="/ViewPosts" component={ViewPosts}/>
      <Route path="/ViewComments" component={ViewComments}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default App
