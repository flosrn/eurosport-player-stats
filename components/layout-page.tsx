import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  children: React.ReactNode;
}

const LayoutPage: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>Eurosport - {title}</title>
        <meta property="og:title" content={`Eurosport - ${title}`} key="title" />
      </Head>
      <header className="fixed bg-black w-full top-0 left-0 flex justify-between items-center py-4 px-10 border-b border-blue-eurosport z-50">
        <div className="flex">
          <Link href="/">
            <a>
              <Image src="/logo/eurosport-logo.svg" width={155} height={35} />
            </a>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-white">About</a>
          </Link>
        </div>
      </header>
      <section className="relative md:h-screen flex flex-col justify-center items-center pt-24">
        {children}
      </section>
    </>
  );
};

export default LayoutPage;
