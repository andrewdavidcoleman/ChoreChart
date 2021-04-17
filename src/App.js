import React from 'react'
import { Provider } from './context/ChoreContext'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Toggle from 'react-toggle'
import ChoreList from './pages/ChoreList'
import AddChore from './pages/AddChore'
import EditChore from './pages/EditChore'

export default () => {
  const baconIsReady = true;
  const handleToggleChange = () => {

  }

  return (
    <Provider>
      <header>
        <h1>Chore Chart</h1>
        <label>
          <span>Parent</span>
          <Toggle
            defaultChecked={baconIsReady}
            icons={false}
            onChange={handleToggleChange} 
          />
          <span>Child</span>
        </label>
        <h6>
          [USER NAME]
          <i className="fa fas fa-user"></i>
        </h6>
      </header>
      <main>
      <Router>
        <div>
          <Switch>
            <Route path="/addChore">
              <AddChore />
            </Route>
            <Route path="/editChore">
              <EditChore />
            </Route>
            <Route path="/">
              <ChoreList />
            </Route>
          </Switch>
        </div>
      </Router>
      </main>
      <aside>
        <div>Amount saved: [CURRENT AMT SAVED]</div>
        <div>Goal: [GOAL]</div>
        <div>Saving for: [SAVING FOR]</div>
      </aside>
    </Provider>
  );
};
