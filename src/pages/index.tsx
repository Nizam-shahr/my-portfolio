import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";

export default function Home() {
  return (
  <div className="flex  gap-4 mt-40">
    <div>
    <Sidebar />
    </div>

 <div>
 <About/>
 </div>
  </div>
  )
}
