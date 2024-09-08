// import { useState, useEffect } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "./firebase"; // import Firestore

// function Todo() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
//             setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//         });
//         return unsubscribe;
//     }, []);

//     return (
//         <div>
//             <h2>Todo List</h2>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>{todo.text}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Todo;



// import { useState, useEffect } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "./firebase"; // import Firestore

// function Todo() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
//             setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//         });
//         return unsubscribe;
//     }, []);

//     return (
//         <div>
//             <h2>Todo List</h2>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <h3>{todo.title}</h3>
//                         <p>Description: {todo.description}</p>
//                         <p>Date: {todo.date}</p>
//                         <p>Status: {todo.status}</p>
//                         <p>Priority: {todo.priority}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Todo;



// import { useState, useEffect } from "react";
// import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
// import { db } from "./firebase"; // import Firestore

// function Todo() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
//             setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//         });
//         return unsubscribe;
//     }, []);

//     const handleStatusChange = async (id, newStatus) => {
//         const todoRef = doc(db, "todos", id);
//         await updateDoc(todoRef, { status: newStatus });
//     };

//     return (
//         <div>
//             <h2>Todo List</h2>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <h3>{todo.title}</h3>
//                         <p>Description: {todo.description}</p>
//                         <p>Date: {todo.date}</p>
//                         <p>Status: 
//                             <select 
//                                 value={todo.status} 
//                                 onChange={(e) => handleStatusChange(todo.id, e.target.value)}
//                             >
//                                 <option value="In Progress">In Progress</option>
//                                 <option value="Completed">Completed</option>
//                                 <option value="Pending">Pending</option>
//                             </select>
//                         </p>
//                         <p>Priority: {todo.priority}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Todo;



// import { useState, useEffect } from "react";
// import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
// import { db } from "./firebase"; // Import Firestore

// function Todo() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
//             setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//         });
//         return unsubscribe;
//     }, []);

//     const handleStatusChange = async (id, newStatus) => {
//         const todoRef = doc(db, "todos", id);
//         await updateDoc(todoRef, { status: newStatus });
//     };

//     return (
//         <div>
//             <h2>Todo List</h2>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <h3>{todo.title}</h3>
//                         <p>Description: {todo.description}</p>
//                         <p>Date: {todo.date}</p>
//                         <p>Status: 
//                             <select 
//                                 value={todo.status} 
//                                 onChange={(e) => handleStatusChange(todo.id, e.target.value)}
//                             >
//                                 <option value="In Progress">In Progress</option>
//                                 <option value="Completed">Completed</option>
//                                 <option value="Pending">Pending</option>
//                             </select>
//                         </p>
//                         <p>Priority: {todo.priority}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Todo;


// import { useState, useEffect } from "react";
// import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
// import { db } from "./firebase"; // Import Firestore

// function Todo() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
//             setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//         });
//         return () => unsubscribe(); // Clean up the subscription
//     }, []);

//     const handleStatusChange = async (id, newStatus) => {
//         const todoRef = doc(db, "todos", id);
//         await updateDoc(todoRef, { status: newStatus });
//     };

//     return (
//         <div>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <h3>{todo.title}</h3>
//                         <p>Description: {todo.description}</p>
//                         <p>Date: {todo.date}</p>
//                         <p>Status: 
//                             <select 
//                                 value={todo.status} 
//                                 onChange={(e) => handleStatusChange(todo.id, e.target.value)}
//                             >
//                                 <option value="In Progress">In Progress</option>
//                                 <option value="Completed">Completed</option>
//                                 <option value="Pending">Pending</option>
//                             </select>
//                         </p>
//                         <p>Priority: {todo.priority}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Todo;

import { useState, useEffect } from "react";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore
 // Import your CSS file
 import "./Todo.css"

function Todo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
            setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe(); // Clean up the subscription
    }, []);

    const handleStatusChange = async (id, newStatus) => {
        const todoRef = doc(db, "todos", id);
        await updateDoc(todoRef, { status: newStatus });
    };

    const getPriorityStyle = (priority) => {
        let backgroundColor;
        let color;
    
        if (priority === "high") {
            backgroundColor = "#f8d7da"; // Lighter red background
            color = "#a94442"; // Dark red text
        } else if (priority === "medium") {
            backgroundColor = "#fbbc04"; // Light orange (unchanged)
            color = "#8a6d3b"; // Dark brown for contrast
        } else {
            backgroundColor = "#d4edda"; // Lighter green background
            color = "#3c763d"; // Dark green text
        }
    
        return {
            backgroundColor,
            color,
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "12px",
            display: "inline-block",
            whiteSpace: "nowrap", // Prevent wrapping
            width: "50px" // Adjust width to fit content
        };
    };

    return (
        <div style={{ border: "1px solid #ccc", borderRadius: "10px", marginBottom: "20px" }} className="todo-list">
            <h2 style={{background: "#6c03b4", color:"white",margin: 0, padding: "10px" , overflow:"auto"}}>TODO</h2>
            <div style={{margin:"10px"}}>

       
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <span style={getPriorityStyle(todo.priority)}>
                            {todo.priority}
                        </span>
                        <div className="todo-header">
                            <h3 className="todo-title">{todo.title}</h3>
                            <select 
                                className="status-dropdown"
                                value={todo.status} 
                                onChange={(e) => handleStatusChange(todo.id, e.target.value)}
                            >
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                        <p className="todo-description">{todo.description}</p>
                        <p className="todo-date">{todo.date}</p>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default Todo;
