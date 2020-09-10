import React from 'react';
import './style/App.css';
import './style/Home.css';
import {connect} from 'react-redux';
import Components from './routes/router';
import Login from './Components/Login/Login';

const App = ({user}) => <div className="app">{user['uid'] ? Components : <Login />}</div>;

const State = (state) => ({user: state.users.items});

export default connect(State)(App);
