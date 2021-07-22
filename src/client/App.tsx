import * as React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Chirps from './Pages/Chirps';
import Post from './Pages/Post';
import Chirp from './Pages/Chirp';
// do fetch request to get all chirps
// Put button on each chirp that take me to specific chirp link where I make edits to chirp
// On page for new chirp create a form that posts a new chirp to the chirps page.  Does the post and when you go back to the page it gets all the chirps


/* HOOK REACT EXAMPLE */
const App = () => {

	return (
		<BrowserRouter>
            <Navbar />
        <Switch>
           
            <Route exact path = '/'>
                <Home />
            </Route>
            <Route exact path = '/allchirps'>
                <Chirps />
            </Route>

            <Route exact path = '/chirps/:chirpid'>
                <Chirp />
            </Route>

            <Route exact path = '/newchirp'>
                <Post />
            </Route>
            
			{/* <Route exact path = '*'>
                {()=> <h1>404: Not Found</h1>}
            </Route> */}
        
		</Switch>

		</BrowserRouter>
	);
};



/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
