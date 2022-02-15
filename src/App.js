import './App.css';
import Signin from './components/Signin';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './components/Signup';
import Header from './components/Header';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Signin/>}/>
				<Route path="/signup" element={<Signup/>}/>
				<Route path="/dash" element={<Header/>}/>
			</Routes>
		</BrowserRouter>
	);

}

export default App;
