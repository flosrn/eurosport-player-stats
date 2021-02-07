import React from "react";
import LayoutPage from "components/layout-page";

const AboutPage: React.FC = () => (
  <LayoutPage title="About">
    <div className="flex items-center w-full justify-center">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="p-2">
            <h1 className="text-center text-4xl">Hello 👋</h1>
            <h4 className="text-center mt-4">My name is</h4>
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              Florian Séran
            </h3>
            <p className="text-center text-gray-400 italic text-sm px-4 mt-5">
              I'm web developer working mostly with React and Next.js and I'm the creator of this
              little website.
            </p>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">Linkedin</td>
                  <td className="px-2 py-2">
                    <a
                      href="https://www.linkedin.com/in/florian-seran/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-eurosport"
                    >
                      linkedin.com/in/florian-seran/
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">Github</td>
                  <td className="px-2 py-2">
                    <a
                      href="https://github.com/Flosrn"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-eurosport"
                    >
                      github.com/Flosrn
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td className="px-2 py-2">
                    <a
                      href="mailto:florian.seran@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-eurosport"
                    >
                      florian.seran@gmail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </LayoutPage>
);

export default AboutPage;
