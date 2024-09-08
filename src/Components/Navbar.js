import React from "react";
import logo from "./boardinfinity.png";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.logoContainer}>
                <img
                    src={logo} 
                    alt="Logo"
                    style={styles.logo}
                />
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "white", // Background color for the navbar
        // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow for the navbar
    },
    logoContainer: {
        flex: 1,
    },
    logo: {
        height: "90px", // Adjust the height as needed
        width: "auto",
    },
};

export default Navbar;
