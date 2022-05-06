import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './../components/Navbar';
import Home from '../components/Home';
import About from './../components/About';
import Contact from './../components/Contact';

export default function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
