import "./Css/App.css";
import Clock from './Components/Clock'
import Settings from './Components/Settings'

function App() {
	return <div className="App">
		<h1 className="title">pomodoro</h1>
		<Clock/>
		<Settings/>

	</div>;
}

export default App;
