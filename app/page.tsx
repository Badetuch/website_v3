import Image from "next/image";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Page = () => {
  return (
    <div>
      <BackgroundBeams/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
};

export default Page;
