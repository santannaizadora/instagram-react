import NavBar from './NavBar';
import Stories from './Stories';

function App() {
    return (
        <>
			<NavBar/>
            <div className="corpo">
                <div className="esquerda">
                    <Stories/>
                </div>
        </div>
		</>
    );
}

export default App;