import { Inter } from "next/font/google";
import MyLayout from "./components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MyLayout title="Dashboard"></MyLayout>
    </>
  );
}
