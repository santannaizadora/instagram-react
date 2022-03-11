import NavBar from './NavBar';
import Stories from './Stories';
import Posts from './Posts';
import SideBar from './SideBar';
import FooterMobile from './FooterMobile';

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
                <FooterMobile />
            </div>
            
        </>
    );
}

export default App;