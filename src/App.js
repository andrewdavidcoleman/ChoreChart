import React, { useContext } from 'react'
import { Provider } from './context/ChoreContext'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ChoreList from './pages/ChoreList'
import AddChore from './pages/AddChore'
import ChoreDetail from './pages/ChoreDetail'
import EditChore from './pages/EditChore'
import Dashboard from './components/Dashboard'
import ParentToggle from './components/ParentToggle'

export default () => {
  const parent = true;

  return (
    <Provider>
      <header>
        <h1>Chore Chart</h1>
        <ParentToggle />
        <h6>
          [USER NAME]
          <i className="fa fas fa-user"></i>
        </h6>
      </header>
      <main>
      <Router>
        <div>
          <Switch>
            <Route path="/ChoreChart/addChore">
              <AddChore />
            </Route>
            <Route path="/ChoreChart/editChore/:id">
              <EditChore />
            </Route>
            <Route path="/ChoreChart/choreDetail/:id">
              <ChoreDetail />
            </Route>
            <Route path="/ChoreChart">
              <ChoreList />
            </Route>
          </Switch>
        </div>
      </Router>
      </main>
      <Dashboard />
    </Provider>
  );
};
