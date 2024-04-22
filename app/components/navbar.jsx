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
            <Link href="/">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
        </nav>

    );
}