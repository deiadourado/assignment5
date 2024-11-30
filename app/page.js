/*Student Name: Andreia Araujo Dourado
Student number: 200560835
E-mail: 200560835@student.georgianc.on.ca*/

import Image from 'next/image';
import Link from 'next/link';
import '../app/styles/home.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/portfolio" className="nav-link">Portfolio</Link>
        <Link href="/resume" className="nav-link">Resume</Link>
        <Link href="/blog" className="nav-link">Blog</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="container">
        <h1 className="title">Welcome to my portfolio!</h1>
        <Image
          src="/welcome.png"
          alt="Profile Image"
          width={200}
          height={200}
          className="image"
        />
        <p className="description">
          Hi there! This is my personal portfolio!
        </p>
      </div>
    </div>
  );
}