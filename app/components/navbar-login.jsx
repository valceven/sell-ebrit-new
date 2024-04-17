import Link from "next/link";
import Image from 'next/image';
import Logo from './logo.png';


export default function Navbar(){

    return (
        <nav>
            <Image 
                src={Logo} 
                alt="The best logo in the world"
                width={70}
                quality={100}
                placeholder="blur"
                style={{ borderRadius: '35px' }}
            />
            <h1>Sell-Ebrate</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/contact">Log Out</Link>
        </nav>

    );
}