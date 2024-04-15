import "./style.css"; // Added the "from" keyword

export default function Register() { // Corrected the function declaration

    return (
        <div className="reg-container">
            <div className="form-box">
                <form className="form">
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container"> {/* Changed "class" to "className" */}
                        <input type="text" className="input" placeholder="Full Name" />
                        <input type="email" className="input" placeholder="Email" /> {/* Changed "class" to "className" */}
                        <input type="password" className="input" placeholder="Password" /> {/* Changed "class" to "className" */}
                    </div>
                    <button>Sign up</button>
                </form>
                <div className="form-section">
                    <p>Have an account? <a href="">Log in</a> </p>
                </div>
            </div>
        </div>
    );

}
