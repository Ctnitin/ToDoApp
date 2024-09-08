// import { useState, useEffect } from "react";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { db } from "./firebase"; // import Firestore

// function CompletedTodos() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const q = query(collection(db, "todos"), where("status", "==", "completed"));
//         const unsubscribe = onSnapshot(q, (snapshot) => {
//             setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//         });
//         return unsubscribe;
//     }, []);

//     return (
//         <div>
//             <h2>Completed Todos</h2>
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

// export default CompletedTodos;

// import { useState, useEffect } from "react";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { db } from "./firebase"; // import Firestore

// function CompletedTodos({ todos }) {
//     const completedTodos = todos.filter(todo => todo.status === "completed");

//     return (
//         <div>
//             <h2>Completed Todos</h2>
//             <ul>
//                 {completedTodos.map((todo) => (
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

// export default CompletedTodos;






// import { useState, useEffect } from "react";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import { db } from "./firebase"; // Import Firestore

// function CompletedTodos() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const q = query(collection(db, "todos"), where("status", "==", "Completed")); // Ensure the status matches
//         const unsubscribe = onSnapshot(q, (snapshot) => {
//             setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//         });
//         return () => unsubscribe(); // Clean up the subscription
//     }, []);

//     return (
//         <div>
//             <h2>Completed Todos</h2>
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

// export default CompletedTodos;
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore

function CompletedTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "todos"), where("status", "==", "Completed")); // Ensure the status matches
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe(); // Clean up the subscription
    }, []);

    const getPriorityStyle = (priority) => {
        let backgroundColor;
        let color = "#fff"; // Default white text for medium priority
    
        if (priority === "high") {
            backgroundColor = "#f9c0c0"; // Lighter red background
            color = "#b22222"; // Dark red text
        } else if (priority === "medium") {
            backgroundColor = "#fbbc04"; // Light orange (unchanged)
            color = "#fff"; // Keep white text
        } else {
            backgroundColor = "#b3e6b3"; // Lighter green background
            color = "#006400"; // Dark green text
        }
    
        return {
            backgroundColor,
            color,
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "12px",
            display: "inline-block"
        };
    };

    return (
        <div style={{ border: "1px solid #ccc",  borderRadius: "10px", marginBottom: "20px" }}>
            <h2 style={{background: "#11cd21",color:"white", margin: 0, padding: "10px" , overflow:"auto"}}>COMPLETED</h2>
            <div style={{margin:"10px"}}>

            
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px", borderRadius: "5px" }}>
                        {/* Priority on the top-left corner */}
                        <span style={getPriorityStyle(todo.priority)}>
                                {todo.priority}
                            </span>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          

                            {/* Title and static button */}
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

export default CompletedTodos;
