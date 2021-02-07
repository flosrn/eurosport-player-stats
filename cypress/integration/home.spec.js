/// <reference types="cypress" />

const players = [
  {
    firstname: "Stan",
    lastname: "Wawrinka",
    shortname: "S.WAW",
    sex: "MAN",
    picture: {
      url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
    },
    country: {
      picture: {
        url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
      },
      code: "SUI",
    },
    stats: {
      rank: 21,
      points: 1784,
      weight: 81000,
      height: 183,
      age: 33,
      last: [true, true, true, false, true],
    },
  },
  {
    firstname: "Rafael",
    lastname: "Nadal",
    shortname: "R.NAD",
    sex: "MAN",
    picture: {
      url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
    },
    country: {
      picture: {
        url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png",
      },
      code: "ESP",
    },
    stats: {
      rank: 1,
      points: 1982,
      weight: 85000,
      height: 185,
      age: 33,
      last: [true, false, false, false, true],
    },
  },
];

context("Access to Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should find page title", () => {
    cy.get("h1").contains("Player stats 🎾");
  });

  it("Check correct player name", () => {
    cy.get("[data-test=player-name]").each((item, index) => {
      cy.wrap(item).should("contain.text", players[index].lastname);
    });
  });

  it("Check correct player picture", () => {
    cy.get("[data-test=player-picture]").each((item, index) => {
      cy.wrap(item)
        .should("have.attr", "alt")
        .should("include", `${players[index].firstname} ${players[index].lastname}`);
    });
  });

  it("Check correct player country", () => {
    cy.get("[data-test=player-country]").each((item, index) => {
      cy.wrap(item).should("contain.text", players[index].country.code);
    });
  });

  it("Check correct player height", () => {
    cy.get("[data-test=player-height]").each((item, index) => {
      cy.wrap(item).should("contain.text", players[index].stats.height * 0.01);
    });
  });

  it("Check correct player weight", () => {
    cy.get("[data-test=player-weight]").each((item, index) => {
      cy.wrap(item).should("contain.text", players[index].stats.weight / 1000);
    });
  });

  it("Check correct player age", () => {
    cy.get("[data-test=player-age]").each((item, index) => {
      cy.wrap(item).should("contain.text", players[index].stats.age);
    });
  });

  it("Check correct player ranking", () => {
    cy.get("[data-test=player-ranking]").each((item, index) => {
      cy.wrap(item).should("contain.text", players[index].stats.rank);
    });
  });

  it("Check correct player previous matches wins", () => {
    cy.get("[data-test=player-last-wins]").each((item, index) => {
      cy.wrap(item).should("contain.text", players[index].stats.last.filter(Boolean).length);
    });
  });

  it("Check correct player previous matches looses", () => {
    cy.get("[data-test=player-last-looses]").each((item, index) => {
      cy.wrap(item).should("contain.text", players[index].stats.last.filter((el) => !el).length);
    });
  });
});
