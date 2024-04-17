import "./styles.css"
import Image from "next/image";
import Adrina from "./adrian.jpg";

export default function AboutCard ({name, desc ,link}){

    return (
        <div>
            <div className="card">
            <div className="image">
                <Image className="image"
                    src={Adrina}
                    height={150}
                    width={150}
                    border-radius={25}
                    alt="The best coder in the world"
                    placeholder="blur"
                    style={{ width: '100%' }}
                />
            </div>
            <div className="content">
                <a href="#">
                <span className="title">
                {name}
                </span>
                </a>

                <p className="desc">
                    {desc}
                </p>

                <a className="action" 
                href= {link}
                target="blank">
                Learn More About this guy!
                <span aria-hidden="true">
                    →
                </span>
                </a>
            </div>
        </div>
        </div>
    );
}


