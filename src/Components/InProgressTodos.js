// import { useState, useEffect } from "react";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { db } from "./firebase"; // import Firestore

// function InProgressTodos() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const q = query(collection(db, "todos"), where("status", "==", "in progress"));
//         const unsubscribe = onSnapshot(q, (snapshot) => {
//             setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//         });
//         return unsubscribe;
//     }, []);

//     return (
//         <div>
//             <h2>In Progress Todos</h2>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <h3>{todo.title}</h3>
//                         <p>Description: {todo.description}</p>
//                         <p>Date: {todo.date}</p>
//                         <p>Priority: {todo.priority}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default InProgressTodos;



// import { useState, useEffect } from "react";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { db } from "./firebase"; // Import Firestore

// function InProgressTodos() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const q = query(collection(db, "todos"), where("status", "==", "In Progress")); // Ensure the status matches
//         const unsubscribe = onSnapshot(q, (snapshot) => {
//             setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//         });
//         return () => unsubscribe(); // Clean up the subscription
//     }, []);

//     return (
//         <div>
//             <h2>In Progress Todos</h2>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <h3>{todo.title}</h3>
//                         <p>Description: {todo.description}</p>
//                         <p>Date: {todo.date}</p>
//                         <p>Priority: {todo.priority}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default InProgressTodos;


import { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore

function InProgressTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "todos"), where("status", "==", "In Progress")); // Filter for "In Progress"
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe(); // Clean up the subscription
    }, []);

    const getPriorityStyle = (priority) => {
        let backgroundColor;
    let color = "#fff"; // Default white text for medium priority

    if (priority === "high") {
        backgroundColor = "#f8d7da"; // Lighter red background
        color = "#a94442"; // Dark red text
    } else if (priority === "medium") {
        backgroundColor = "#fbbc04"; // Light orange background (unchanged)
        color = "#fff"; // Keep white text for contrast
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
        whiteSpace: "nowrap" // To avoid the span taking up full width
    };
    };

    return (
        <div style={{ border: "1px solid #ccc", borderRadius: "10px", marginBottom: "20px" }} >
            <h2 style={{background: "#fbbc04", color:"black",margin: 0, padding: "10px" , overflow:"auto"}}>IN PROGRESS</h2>
            <div  style={{margin:"10px"}}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px", borderRadius: "5px" }}>
                        {/* Priority on the top-left corner */}
                        <span style={getPriorityStyle(todo.priority)}>
                            {todo.priority}
                        </span>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            {/* Title */}
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h3 style={{ margin: 0, paddingRight: "10px" }}>{todo.title}</h3>
                            </div>
                        </div>

                        {/* Always show description and date */}
                        <div>
                            {/* Description */}
                            <p>Description: {todo.description}</p>
                            {/* Date */}
                            <p>Date: {todo.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default InProgressTodos;
