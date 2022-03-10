import NavBar from './NavBar';
import Stories from './Stories';
import Posts from './Posts';
import SideBar from './SideBar';

function App() {
    return (
        <>
            <NavBar />
            <div className="corpo">
                <div className="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <SideBar />
            </div>
            
        </>
    );
}

export default App;