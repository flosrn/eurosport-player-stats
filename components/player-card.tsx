import React from "react";
import Image from "next/image";
import { Player } from "interfaces/Player";

const PlayerCard: React.FC<Player> = ({ firstname, lastname, picture, country, stats }) => {
  return (
    <div className="flex relative w-full">
      <div className="w-full lg:mb-8 sm:mb-8 bg-gray-900 leading-4 mb-5 relative">
        <div
          className="bg-no-repeat bg-cover border-0 px-5 block h-full  absolute text-gray-500 w-full"
          style={{
            maxHeight: 150,
            backgroundImage: 'url("https://dnl.eurosport.com/web-toolkit/playercard/bg1.png")',
          }}
        />
        <div className="border-0 mx-0 mb-0 mt-12  pb-12 pt-16 text-gray-300">
          <div className="flex justify-between px-5 leading-4  relative align-baseline w-full z-10">
            <div
              className="rounded-full sm:h-32 sm:mx-0 sm:mt-0 sm:mb-8 sm:w-32 border-0 flex-none h-24 overflow-hidden absolute right-5 text-gray-300 w-24"
              style={{
                top: "-100px",
              }}
            >
              <Image
                data-test="player-picture"
                src={picture.url}
                alt={`${firstname} ${lastname}`}
                width={200}
                height={300}
                className="leading-4 align-baseline w-full"
              />
            </div>
            <div className="w-full border-0 flex-col self-end m-0 text-gray-300">
              <div
                data-test="player-name"
                className="sm:text-5xl text-4xl mx-0 mt-0 mb-2 p-0 align-baseline"
              >
                {firstname}
                <br className="text-5xl text-gray-300" />
                {lastname}
              </div>
              <div className="flex items-center leading-4 p-0 align-baseline">
                <Image src={country.picture.url} alt={country.code} width={24} height={16} />
                <span data-test="player-country" className="ml-3 uppercase">
                  {country.code}
                </span>
              </div>
              <ul className="w-full sm:mt-12 flex justify-between leading-4 mx-0 mb-0 mt-8 p-0">
                <li
                  data-test="player-height"
                  className="border-0 self-end text-3xl m-0 text-center text-gray-300"
                >
                  <div className="text-xs leading-none mx-0 mt-0 mb-2 p-0 text-gray-500 uppercase align-baseline">
                    Height (m)
                  </div>
                  {stats.height * 0.01}
                </li>
                <li
                  data-test="player-weight"
                  className="border-0 self-end text-3xl m-0 text-center text-gray-300"
                >
                  <div className="text-xs leading-none mx-0 mt-0 mb-2 p-0 text-gray-500 uppercase align-baseline">
                    Weight (Kg)
                  </div>
                  {stats.weight / 1000}
                </li>
                <li
                  data-test="player-age"
                  className="border-0 self-end text-3xl m-0 text-center text-gray-300"
                >
                  <div className="text-xs leading-none mx-0 mt-0 mb-2 p-0 text-gray-500 uppercase align-baseline">
                    Age
                  </div>
                  {stats.age}
                </li>
              </ul>
            </div>
            <div className="sm:-mt-20 sm:top-0 border-0 flex-col self-end m-0 relative text-center text-gray-300">
              <div className="sm:w-32 leading-4 px-0 pb-0 pt-32 text-gray-300 align-baseline">
                <div className="border-0 text-xs leading-none mx-0 mt-0 mb-2 p-0 text-center text-gray-500 uppercase">
                  ATP ranking
                </div>
                <span
                  data-test="player-ranking"
                  className="border-0 m-0 p-0 text-center align-baseline text-7xl"
                >
                  {stats.rank}
                </span>
              </div>
            </div>
          </div>
          <div
            className="bg-gray-800 leading-4 m-0 p-0 absolute align-baseline z-0"
            style={{
              clipPath: "polygon(0px 11%, 101% 0%, 101% 89%, 0% 100%)",
              inset: 0,
            }}
          />
          <div className="relative w-full mt-20 z-10">
            <div className="sm:pb-12 sm:text-left border-0 m-0 pt-0 pb-10 text-center text-gray-500">
              <ul className="leading-4 mx-0 mt-0 mb-10 overflow-hidden p-0 text-left align-baseline">
                <div className="border-0 m-0 text-left text-gray-500">
                  <div className="sm:mx-20 sm:my-auto sm:px-0 sm:pb-5 sm:pt-8 leading-4 mx-10 my-auto px-0 pb-2 pt-5 text-gray-500 align-baseline">
                    <div className="border-0 flex flex-wrap leading-snug m-0 p-0 text-left text-white tracking-wide">
                      <div className="flex flex-no-wrap my-0 mx-2 text-left tracking-wide align-baseline">
                        <div
                          data-testid="label-element"
                          className="border-0 font-light m-0 p-0 text-gray-300 uppercase align-baseline"
                        >
                          <span className="font-light my-0 mr-0 ml-px text-left uppercase tracking-wide">
                            Previous matches
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer flex items-stretch text-sm p-0 no-underline align-baseline w-full">
                    <div className="bg-gray-600 border-0 flex items-center flex-grow flex-shrink m-0 overflow-hidden py-0 pl-0 pr-2 text-left text-gray-500 w-full">
                      <div className="sm:my-0 sm:mx-8 sm:w-6 cursor-pointer items-center font-sans my-0 mx-3 p-0 text-green-500 align-baseline w-5">
                        <img
                          src="https://zephyr-ui.eurosport.com/1.186.2/b8a900e82175c4979a3b594513c563ae.svg"
                          alt="won match icon"
                          className="border-0 leading-none m-0 max-w-full text-left align-baseline"
                        />
                      </div>
                      <div
                        data-test="sets-score-wrapper"
                        className="w-full cursor-pointer flex-shrink text-sm p-0 text-gray-500 align-baseline"
                      >
                        <div className="border-0 flex items-stretch justify-between h-full text-base leading-none m-0 text-left align-baseline">
                          <div className="w-full cursor-pointer flex justify-start flex-grow flex-shrink font-sans font-bold leading-none mx-0 my-3 overflow-hidden p-0 text-gray-300 uppercase">
                            <div className="border-0 flex-initial font-bold leading-4 m-0 text-left uppercase align-baseline">
                              <div className="cursor-pointer flex items-center font-sans leading-4 p-0 text-gray-300 align-baseline">
                                <div className="border-0 font-sans font-bold m-0 text-left uppercase truncate">
                                  <span className="cursor-pointer font-bold leading-4 p-0 text-gray-300 align-baseline whitespace-no-wrap">
                                    Win
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="border-0 flex items-center justify-center font-bold leading-4 m-0 py-0 pr-0 pl-2 text-left uppercase align-baseline">
                              ✓
                            </div>
                          </div>
                          <div className="flex cursor-pointer items-stretch flex-grow-0 flex-shrink-0 font-bold leading-4 p-0 text-gray-500">
                            <div className="border-0 flex items-center leading-4 m-0 text-left align-baseline w-8">
                              <div className="cursor-pointer font-sans text-base leading-none m-auto p-0 text-gray-300">
                                {stats.last.filter(Boolean).length}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="border-gray-900 border-solid border-r-0 border-b-0 border-l-0 border-t-2 block m-0 text-left" />
                        <div className="border-0 flex items-stretch justify-between h-full text-base leading-none m-0 text-left align-baseline">
                          <div className="cursor-pointer justify-start flex-grow flex-shrink font-sans font-bold leading-none mx-0 my-3 overflow-hidden p-0 text-gray-500 uppercase">
                            <div className="border-0 flex-initial font-bold leading-4 m-0 text-left uppercase align-baseline">
                              <div className="cursor-pointer flex items-center font-sans leading-4 p-0 text-gray-500 align-baseline">
                                <div className="border-0 font-sans font-bold m-0 text-left uppercase truncate">
                                  <span className="cursor-pointer font-bold leading-4 p-0 text-gray-500 align-baseline whitespace-no-wrap">
                                    Loose
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="border-0 flex items-center justify-center flex-grow-0 flex-shrink-0 font-bold leading-4 m-0 py-0 pr-0 pl-2 text-left uppercase align-baseline" />
                          </div>
                          <div className="flex cursor-pointer items-stretch flex-grow-0 flex-shrink-0 font-bold leading-4 p-0 text-gray-500">
                            <div className="border-0 flex items-center leading-4 m-0 text-left align-baseline w-8">
                              <div className="cursor-pointer font-sans text-base leading-none m-auto p-0 text-gray-300">
                                {stats.last.filter((el) => !el).length}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-54 sm:flex-grow-0 text-xs bg-blue-600 border-0 flex items-center justify-center px-1 text-center text-white uppercase tracking-wider">
                      Match info
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
