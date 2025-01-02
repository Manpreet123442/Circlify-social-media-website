import './index.css';
import { Outlet } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from "./components/rightbar/Rightbar";
import { useContext } from 'react';
import { darkModeContext } from './context/DarkModeContext';

function App() {

    const {darkMode} = useContext(darkModeContext);
    
    return(
        <div className= {`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display : "flex"}}>
            <Leftbar/>
            <div style={{flex : 6}}>
            <Outlet/>
            </div>
            <Rightbar/>
        </div>
        </div>
    )
}

export default App;