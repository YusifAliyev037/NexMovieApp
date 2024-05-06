import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/shared/components/Header";
import Head from "next/head";
import MetaSeo from "@/shared/components/MetaSeo/MetaSeo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <Head>
    <title>
      Home
    </title>
   </Head>
   <Header/>
   <MetaSeo title="Home" desc="Welcome to my Movie App!" img_url="https://s3-alpha.figma.com/hub/file/2908137268/66e01ce5-c164-490c-a1e0-6ba478abea66-cover.png" />
   </>
  );
}
