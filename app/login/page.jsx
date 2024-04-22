import Link from "next/link";
import "./styles.css";


export default function Login(){

    return(
        <div className="reg-container">
            <div className="form-box">
                <form className="form" method="POST">
                    <span className="title">Log In</span>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <div className="form-container"> 
                        <input
                            type="text"
                            className="input"
                            placeholder="Email"
                            name="email"
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            name="password"
                        />
                        <button type="submit" name="btnRegister">Log in</button>
                    </div>
                </form>
                <div className="form-section">
                    <p>Still Dont Have an account? <Link href="/register">Register Now!</Link> </p>
                </div>
            </div>
        </div>
    );
}