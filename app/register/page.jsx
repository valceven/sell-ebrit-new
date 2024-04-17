import "./style.css";

export default function Register() { 

    return (
        <div className="reg-container">
            <div className="form-box">
                <form className="form">
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container"> 
                        <input type="text" className="input" placeholder="First Name" name="firstname"/>
                        <input type="text" className="input" placeholder="Last Name" name="lastname"/>
                        <input type="email" className="input" placeholder="Email" name="email"/> 
                        <input type="password" className="input" placeholder="Password" name="password"/> 
                        <input type="date" className="input" name="date"/> 
                        <select className="input" name="gender" label="Default select example">
                            <option selected value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <button type="submit" name="btnRegister">Sign up</button>
                </form>
                <div className="form-section">
                    <p>Have an account? <a href="">Log in</a> </p>
                </div>
            </div>
        </div>
    );

}
