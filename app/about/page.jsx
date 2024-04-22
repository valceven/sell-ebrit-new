import "./styles2.css"
import AboutCard from "../components/about-card";

export default function About(){

    return(
        <div>
            <div className="container">
                <div className="contents">
                    <div className="heading">
                        <h1>About Us</h1>
                    </div>  
                </div>
            </div>
            <div className="container">
                <div className="contents">
                    <div className="contentz">
                        <AboutCard name={"Adrian"} desc={"JAKARTA INNOVATION WINNER || HUAWEI AMBASSADOR / CO-OWNER"} link={"https://www.facebook.com/profile.php?id=100013644528157"}/>
                        <AboutCard name={"SAJULGOAT"} desc={"CHINA SHENGZEN ICT WINNER  ||  BEST PROGRAMMER OF ALL TIME"} link={"https://www.facebook.com/profile.php?id=100013644528157"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
