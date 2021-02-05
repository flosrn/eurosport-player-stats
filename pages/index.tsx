import React from "react";
import { GetStaticProps } from "next";
import LayoutPage from "components/layout-page";
import { getPlayers } from "lib/api";
import { Player } from "interfaces/Player";
import PlayerCard from "components/player-card";

interface Props {
  players: Player[] | null;
}

const HomePage: React.FC<Props> = ({ players }) => {
  return (
    <LayoutPage>
      <div className="space-y-3 w-full px-6 sm:w-auto md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 mt-10">
        {players.length > 0 &&
          players.map((player: Player) => <PlayerCard key={player.lastname} {...player} />)}
      </div>
    </LayoutPage>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const players = (await getPlayers()) || [];
    return { props: { players } };
  } catch (error) {
    return { props: { players: null } };
  }
};

export default HomePage;
