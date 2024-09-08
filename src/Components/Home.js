import { useState } from "react";
import ToDocontainer from "./Todocontainer";
import Todoform from "./Todoform";

function Home() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleCreateTaskClick = () => {
        setIsFormVisible(true);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    return (
        <>
        <div className="homecontainer">

      <div className="headinghome">
            <h1>Desktop and Mobile Application</h1>
            <button onClick={handleCreateTaskClick}>Create Task</button>
            </div>
            {isFormVisible && (
                <div className="form-overlay">
                    <Todoform onClose={handleCloseForm} />
                </div>
            )}
            <div className="todocontanerhome">
                <ToDocontainer />
            </div>
            
        </div>

        </>
    );
}

export default Home;
