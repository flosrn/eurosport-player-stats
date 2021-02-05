import React from "react";
// import { GetStaticProps } from "next";
import LayoutPage from "components/layout-page";

const HomePage: React.FC = () => {
  return (
    <LayoutPage>
      <div className="text-white">hello world</div>
    </LayoutPage>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   return { props: {} };
// };

export default HomePage;
