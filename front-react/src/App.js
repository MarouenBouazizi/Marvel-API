import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'


export class App extends React.Component {
  render() {
  return (
  <div className="App">
      <div className="App-content">
          <Switch>  
              <Route exact path="/" component={Dashboard}/>
          </Switch>
      </div>
  </div>
  );
}
}


export default App;
