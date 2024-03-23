import Image from "next/image";
import styles from "./page.module.css";
import Maintenance from "@/components/maintenance/Index";

export default function Home() {
  return (
    <main>
      <Maintenance />
    </main>
  );
}
