import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavigationBar from './NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Stuff from './components/Stuff';
import Comment from './components/Comment';
import Location from './components/Location';

const App = function () {
	return (
		<div>
			<NavigationBar />
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/stuff" component={Stuff} />
					<Route path="/locations" component={Location} />
					<Route path="/comments" component={Comment} />
				</Switch>
			</Router>
		</div>
	)
};

export default App;
