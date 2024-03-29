import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginhomepage.css";

const LoginHomepage = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button className="buttonget" onClick={openModal}>
                Students Sign In
            </button>
            <Link to="/transformation">
                <button className="buttonget">Companies Sign In</button>
            </Link>

            {/* Modal for Sign In */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        {/* Your Sign In Form or Content Goes Here */}
                        <h2>Sign In</h2>
                        {/* Add your sign-in form or any other content here */}
                        <button onClick={closeModal}>Close Modal</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginHomepage;
