"use client";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Selamat Datang di Aplikasi Next.js</h1>
      <p>Website ini menggunakan sistem routing otomatis berbasis file.</p>
      <nav>
        <Link href="/about">About</Link> 
        | <Link href="/contact">Contact</Link>{" "}
        | <Link href="/products">Products</Link>
      </nav>
    </div>
  );
}
