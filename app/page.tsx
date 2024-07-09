import Image from "next/image";
import Header from "@/components/Header";
import Body from "@/components/Body";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  return (
    <div className={inter.className} >
      <Header/>
      <Body/>
    </div>
  );
};

export default Page;
