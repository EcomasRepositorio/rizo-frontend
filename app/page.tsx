import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/home/Index";
import HoverDevCards from "@/components/cards/Index";
import Cards3D from "@/components/cards3D/Index";
import Course from "@/components/course/Index";
import Contact from "@/components/contact/Index";
import Whatsapp from "@/components/whatsapp/Index";

export default function Main() {
  return (
    <main>
      <Home />
      <Cards3D />
      <HoverDevCards />
      <Course />
      <Contact />
      <Whatsapp />
    </main>
  );
}
