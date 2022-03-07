import './App.css';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx'
import Profile from './components/profile/Profile.jsx'

function App() {
	return (
		<div class="wrapper">
			<Header />
			<Sidebar />
			<Profile name = "Elon Mask"/>
		</div>
	);
}

export default App;






