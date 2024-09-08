// import "./ToDoContainer.css"; // Import the CSS file
// import Todo from "./Todo";
// import InProgressTodos from "./InProgressTodos";
// import CompletedTodos from "./CompletedTodos";

// function ToDocontainer() {
//     return (
//         <div className="container">
//             {/* All Todos */}
//             <div className="todo-section todo-all">
//                 <h2>All Todos</h2>
//                 <Todo />
//             </div>

//             {/* In Progress Todos */}
//             <div className="todo-section todo-inprogress">
//                 <h2>In Progress Todos</h2>
//                 <InProgressTodos />
//             </div>

//             {/* Completed Todos */}
//             <div className="todo-section todo-completed">
//                 <h2>Completed Todos</h2>
//                 <CompletedTodos />
//             </div>
//         </div>
//     );
// }

// export default ToDocontainer;




import "./ToDoContainer.css"; // Import the CSS file
import Todo from "./Todo";
import InProgressTodos from "./InProgressTodos";
import CompletedTodos from "./CompletedTodos";

function ToDocontainer() {
    return (
        <div className="container">
            {/* All Todos */}
            <div className="todo-section todo-all">
                <Todo />
            </div>

            {/* In Progress Todos */}
            <div className="todo-section todo-inprogress">
                <InProgressTodos />
            </div>

            {/* Completed Todos */}
            <div className="todo-section todo-completed">
                <CompletedTodos />
            </div>
        </div>
    );
}

export default ToDocontainer;
