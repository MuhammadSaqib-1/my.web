
"use client";

import Link from "next/link";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "@/components/Footer";



export default function Home() {
//   useEffect(() => {
//   AOS.init({
//     easing: "ease-out-back",
//      duration:1600,
//      delay:100,
//      mirror: true,
//      anchorPlacement: "bottom-bottom",
//      offset:160

//   });
// AOS.refresh
//   },[]);
  return (
   <main>
    <Hero/>
    <Projects/>
    <Skills/>
    <Contact/>
    <About/>
    <Footer/>
    
   </main>
  );
}
