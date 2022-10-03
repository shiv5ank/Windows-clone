import Taskbar from "./Taskbar"
import folder from "../images/folder.png";

const Desktop = () => {
  return (
    
      <div className="background_container">
        <div className="icon_container">
          <div className="icon_app">
          <button className="app"><img src={folder}/></button>
          </div>
          <div className="icon_name">
            <span>Windows 11</span>
          </div>
        </div>
        <Taskbar />
      </div>
      
  );
};

export default Desktop;
