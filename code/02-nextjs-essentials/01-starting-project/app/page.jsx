import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  // Only showing in the backend (server side), which means you wont be able to see it in the console log in the web (client side)
  console.log("Excecuting...")
  return (
    // Server component (provided by Next.js):Components (the return, jsx-code) that are rendered and converted to HTML which is then sent to the browser. The filename "page.js(x)" tells Next.js that we want to have that component as a page
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
