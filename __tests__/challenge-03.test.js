import { expect, test } from "vitest";
import { buildArtistList } from "../challenges/challenge-03";

const allActs = [
  "AC/DC",
  "Abbott and Sons",
  "Auer - Towne",
  "Barrows Group",
  "Bartell - Cummerata",
  "Beatty and Sons",
  "Bergnaum and Sons",
  "Bernhard LLC",
  "Black Sabbath",
  "Block - Boehm",
  "Bogisich - Terry",
  "Borer Group",
  "Breitenberg, Marvin and Green",
  "Cartwright Group",
  "Champlin - O'Hara",
  "Conn Group",
  "Cremin, Romaguera and Moore",
  "Dibbert LLC",
  "Dooley LLC",
  "DuBuque and Sons",
  "Emard - Dooley",
  "Erdman - Casper",
  "Farrell, Ullrich and Ebert",
  "Fay, Upton and Nienow",
  "Fritsch - Witting",
  "Gerlach - Balistreri",
  "Gislason, Skiles and Schneider",
  "Glover - Bogisich",
  "Glover, Green and Schneider",
  "Goyette and Sons",
  "Greenfelder, Haag and Lakin",
  "Grimes, Satterfield and Reilly",
  "Guns N' Roses",
  "Halvorson, Kertzmann and Predovic",
  "Hamill LLC",
  "Harber and Sons",
  "Harvey - Shields",
  "Heaney Group",
  "Herman and Sons",
  "Hermiston Group",
  "Hessel - Keeling",
  "Hilll - Weber",
  "Hoeger Inc",
  "Howe, Beahan and Waelchi",
  "Hudson - Collier",
  "Huels, Ratke and Fritsch",
  "Hyatt LLC",
  "Jacobs and Sons",
  "Jenkins and Sons",
  "Kautzer Inc",
  "Klein, Dare and Hammes",
  "Koepp - Littel",
  "Kub Inc",
  "Kunde LLC",
  "Kuphal - Emmerich",
  "Kuvalis - Turner",
  "Langworth, Krajcik and Miller",
  "Lebsack - Wuckert",
  "Led Zeppelin",
  "Leffler Group",
  "Legros and Sons",
  "Luettgen Inc",
  "MacGyver LLC",
  "Macejkovic - Glover",
  "Marquardt - Legros",
  "McLaughlin LLC",
  "Metallica",
  "Mitchell and Sons",
  "Nikolaus Inc",
  "Nirvana",
  "Nitzsche, Harvey and Harvey",
  "Ondricka, Parisian and Wintheiser",
  "Ortiz Group",
  "Parisian Inc",
  "Pfannerstill, Schneider and Cormier",
  "Price - Ortiz",
  "Price, Grant and Bechtelar",
  "Prohaska, Jast and O'Connell",
  "Queen",
  "Raised Fist",
  "Ritchie - Lind",
  "Rogahn Group",
  "Rohan Group",
  "Rowe - Konopelski",
  "Runolfsdottir, Morar and Ratke",
  "Sawayn, Hansen and Borer",
  "Schowalter, Satterfield and O'Reilly",
  "Schroeder - Pagac",
  "Schultz and Sons",
  "Simonis - Yundt",
  "Steuber Group",
  "Steuber, Skiles and Wyman",
  "Terminalist",
  "Terry, Tromp and Sporer",
  "The Beatles",
  "The Rolling Stones",
  "The Who",
  "Tool",
  "Torp, Bechtelar and Parisian",
  "Walsh Group",
  "Walter - Kuhic",
  "Waters LLC",
  "Wehner Inc",
  "West and Sons",
  "West, Hauck and Langworth",
  "Wiegand - Hickle",
  "Wilderman, Mraz and Thompson",
  "Wilkinson - Boyle",
  "Witting - Bartoletti",
  "Wuckert, Hirthe and Greenfelder",
  "Zboncak - Haag",
];

const cancelledActs = [
  "A Perfect Circle",
  "Bartoletti, Fay and Schumm",
  "Bergnaum, Hartmann and Collins",
  "Christiansen, Larson and West",
  "Farrell - Mohr",
  "Hansen, Steuber and Block",
  "Pink Floyd",
  "Pollich, Sipes and O'Conner",
  "Refused",
  "Romaguera - Toy",
  "Russel Inc",
  "Schowalter, Schowalter and Padberg",
  "Simonis Inc",
  "VonRueden LLC",
  "West - Barton",
]

test("should build artist list", () => {
  const result = buildArtistList();
  expect(Array.isArray(result)).toBe(true);

  allActs.forEach(act => {
    // Make sure all acts gets returned
    expect(result).toContain(act)
  })

});

test("should not contain cancelled acts", () => {
  const result = buildArtistList();
  expect(Array.isArray(result)).toBe(true);

  // Break should have been removed
  expect(result).not.toContain('break')

  cancelledActs.forEach(act => {
    expect(result).not.toContain(act)
  })
});
