import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

const LayoutPage: React.FC<Props> = ({ children }) => {
  return (
    <div className="">
      <header className="fixed w-full top-0 left-0 flex justify-between items-center py-4 px-10 border-b border-blue-eurosport z-10">
        <div className="flex">
          <Link href="/">
            <a>
              <Image src="/logo/eurosport-logo.svg" width={155} height={35} />
            </a>
          </Link>
        </div>
        <Link href="/">
          <a className="text-white">Home</a>
        </Link>
      </header>
      <section className="relative h-screen flex justify-center items-center">{children}</section>
    </div>
  );
};

export default LayoutPage;
