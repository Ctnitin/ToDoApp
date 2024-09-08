


import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore
import './Todoform.css'; // Import the CSS file

function Todoform({ onClose }) {
    // State to store form values
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("in progress");
    const [priority, setPriority] = useState("medium");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add todo to Firebase Firestore
        await addDoc(collection(db, "todos"), {
            title,
            description,
            date,
            status,
            priority
        });

        // Reset form fields
        setTitle("");
        setDescription("");
        setDate("");
        setStatus("in progress");
        setPriority("medium");

        // Close the form
        onClose();
    };

    return (
        <div className="todo-form">
            <button className="close-button" onClick={onClose}>Close</button>
            <form onSubmit={handleSubmit}>
                {/* Title Field */}
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                {/* Description Field */}
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                {/* Date Picker */}
                <div>
                    <label htmlFor="date">Select Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                {/* Status Dropdown */}
                <div>
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                {/* Priority Dropdown */}
                <div>
                    <label htmlFor="priority">Priority:</label>
                    <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default Todoform;


