import start from "../images/start.png";
import fileexplorer from "../images/fileexplorer.png";
import chrome from "../images/chrome.png";
import snipping from "../images/snipping.png";
import store from "../images/store.png";
import edge from "../images/edge.png";
import chevron from "../images/chevron.png";
import internet from "../images/internet.png";
import volume from "../images/volume.png";
import battery from "../images/battery.png";

const Taskbar = () => {
    return(
        <div className="taskbar_container">
            <div className="taskbar_card">
                <div className="taskbar_left">
                    <button className="start_btn"><img src={start} alt="start"></img></button>
                    <input type="text" placeholder="🔎 Type here to search" className="searchbar"></input>
                    <button className="file_explorer"><img src={fileexplorer} alt="fileexplorer"></img></button>
                    <button className="chrome"><img src={chrome} alt="chrome"></img></button>
                    <button className="snipets"><img src={snipping} alt="snipping"></img></button>
                    <button className="appstore"><img src={store} alt="store"></img></button>
                    <button className="edge"><img src={edge} alt="edge"></img></button>                    
                </div>
                <div className="taskbar_right">
                    <button className="chevron"><img src={chevron} alt="chevrop_up"></img></button>
                    <button className="internet"><img src={internet} alt="chevrop_up"></img></button>
                    <button className="volume"><img src={volume} alt="chevrop_up"></img></button>
                    <button className="battery"><img src={battery} alt="chevrop_up"></img></button>
                    <div className="language_card">ENG</div>
                    <div className="datetime_card">
                        <div className="time_card">10:30</div>
                        <div className="date_card">02-10-2022</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Taskbar;