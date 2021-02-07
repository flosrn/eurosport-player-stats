import React from "react";
import Image from "next/image";
import LayoutPage from "components/layout-page";

const ErrorPage: React.FC = () => {
  return (
    <LayoutPage title="Page not found">
      <div className="relative h-full flex justify-center items-center">
        <div className="text-center flex flex-col items-center">
          <h1 className="flex flex-col justify-center items-center text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block dark:text-gray-100 text-3xl md:text-4xl">PAGE NOT FOUND :(</span>
            <span className="block dark:text-gray-100 font-light w-10/12 sm:w-3/4 mt-20 text-2xl md:text-3xl">
              The requested page could not be found.
            </span>
          </h1>
          <div className="absolute w-full h-full bottom-0 left-0 flex justify-center items-end z-0">
            <Image src="/images/travolta.gif" width={490} height={476} />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default ErrorPage;
