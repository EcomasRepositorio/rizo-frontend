import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/home/Index";
import HoverDevCards from "@/components/cards/Index";
import Example from "@/components/cards3D/Index";

export default function Main() {
  return (
    <main>
      <Home />
      <HoverDevCards />
      <Example />
    </main>
  );
}
