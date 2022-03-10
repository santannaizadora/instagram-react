import NavBar from './NavBar';
import Stories from './Stories';
import Posts from './Posts';

function App() {
    return (
        <>
			<NavBar/>
            <div className="corpo">
                <div className="esquerda">
                    <Stories/>
                    <Posts/>
                </div>
        </div>
		</>
    );
}

export default App;