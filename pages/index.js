import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import { LandingSection } from "../components/landing";
import Products from "../components/products";
import { Footer } from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Course Plaza</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingSection />
      <Products />
      <Footer />
    </>
  );
}
