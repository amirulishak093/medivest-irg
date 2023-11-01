export const contingents = [
  {
    name: "Johor Utara",
    image: "/images/logo-johor-utara.png",
  },
  {
    name: "Rons",
    image: "/images/logo-rons.png",
  },
  {
    name: "Johor Selatan",
    image: "/images/logo-johor-selatan.png",
  },
  {
    name: "HQ",
    image: "/images/logo-hq.jpg",
  },
];

export const players = [
  {
    name: "Nur Afifah",
    image:
      "https://media-kul2-1.cdn.whatsapp.net/v/t61.24694-24/382387850_277124885167706_8583238568464750068_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTSn6S7UdOmf0ITpFLo9WgfBF59Ul8FjR4XhZ8kYOC-gA&oe=6539E0EB&_nc_sid=000000&_nc_cat=106",
  },
  {
    name: "Ridzuan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg/1200px-Big_Floppa_and_Justin_2_%28cropped%29.jpg",
  },
  {
    name: "Ahmad Ali",
    image:
      "https://people.com/thmb/2nqvmza52nj3JBwkZveNGIL9Erc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(689x399:691x401)/lebron-james-7f070c722a1143e295b46f67ff0005dc.jpg",
  },
  {
    name: "Liyana",
    image:
      "https://characterai.io/i/300/static/avatars/uploaded/2022/10/14/U3jw1u8YB9S_X2hsr6WegpypIXJIaQudlclPZM5xS48.webp",
  },
];

export const maleAthletes = [
  {
    contingent: contingents[0],
    players: [players[1]],
  },
  {
    contingent: contingents[2],
    players: [players[2]],
  },
];

export const femaleAthletes = [
  {
    contingent: contingents[3],
    players: [players[0]],
  },
  {
    contingent: contingents[2],
    players: [players[3]],
  },
];

export const overallScore = [
  {
    contingent: contingents[3],
    players: [],
    scores: {
      gold: 2,
      silver: 2,
      bronze: 4,
    },
  },
  {
    contingent: contingents[0],
    players: [],
    scores: {
      gold: 1,
      silver: 2,
      bronze: 4,
    },
  },
  {
    contingent: contingents[2],
    players: [],
    scores: {
      gold: 0,
      silver: 2,
      bronze: 4,
    },
  },
  {
    contingent: contingents[1],
    players: [],
    scores: {
      gold: 0,
      silver: 2,
      bronze: 4,
    },
  },
];

/**
 * Table Tennis
 */
export const tableTennisOverall = [
  {
    contingent: contingents[3],
    players: [],
    scores: {
      gold: 2,
      silver: 2,
      bronze: 4,
    },
  },
  {
    contingent: contingents[0],
    players: [],
    scores: {
      gold: 1,
      silver: 2,
      bronze: 4,
    },
  },
  {
    contingent: contingents[2],
    players: [],
    scores: {
      gold: 0,
      silver: 2,
      bronze: 4,
    },
  },
  {
    contingent: contingents[1],
    players: [],
    scores: {
      gold: 0,
      silver: 2,
      bronze: 4,
    },
  },
];

export const tableTennisMensSingles = [
  {
    contingent: contingents[2],
    players: [players[1]],
  },
  {
    contingent: contingents[0],
    players: [players[2]],
  },
  {
    contingent: contingents[3],
    players: [players[0]],
  },
];

export const tableTennisMensDoubles = [
  {
    contingent: contingents[3],
    players: [players[1], players[0]],
  },
  {
    contingent: contingents[0],
    players: [players[1], players[2]],
  },
  {
    contingent: contingents[2],
    players: [players[0], players[2]],
  },
];

export const tableTennisWomensSingles = [
  {
    contingent: contingents[2],
    players: [players[1]],
  },
  {
    contingent: contingents[0],
    players: [players[2]],
  },
  {
    contingent: contingents[3],
    players: [players[0]],
  },
];

export const tableTennisWomensDoubles = [
  {
    contingent: contingents[0],
    players: [players[1], players[3]],
  },
  {
    contingent: contingents[1],
    players: [players[3], players[1]],
  },
  {
    contingent: contingents[2],
    players: [players[1], players[2]],
  },
];

/**
 * Badminton
 */
export const badmintonOverall = [
  {
    contingent: contingents[3],
    players: [],
    scores: {
      gold: 2,
      silver: 2,
      bronze: 4,
    },
  },
  {
    contingent: contingents[0],
    players: [],
    scores: {
      gold: 1,
      silver: 2,
      bronze: 4,
    },
  },
  {
    contingent: contingents[2],
    players: [],
    scores: {
      gold: 0,
      silver: 2,
      bronze: 4,
    },
  },
  {
    contingent: contingents[1],
    players: [],
    scores: {
      gold: 0,
      silver: 2,
      bronze: 4,
    },
  },
];

export const badmintonMensSingles = [
  {
    contingent: contingents[2],
    players: [players[1]],
  },
  {
    contingent: contingents[0],
    players: [players[2]],
  },
  {
    contingent: contingents[3],
    players: [players[0]],
  },
];

export const badmintonWomensSingles = [
  {
    contingent: contingents[2],
    players: [players[1]],
  },
  {
    contingent: contingents[0],
    players: [players[2]],
  },
  {
    contingent: contingents[3],
    players: [players[0]],
  },
];

export const badmintonMensDoubles = [
  {
    contingent: contingents[0],
    players: [players[1], players[3]],
  },
  {
    contingent: contingents[1],
    players: [players[3], players[1]],
  },
  {
    contingent: contingents[2],
    players: [players[1], players[2]],
  },
];

export const badmintonWomensDoubles = [
  {
    contingent: contingents[0],
    players: [players[1], players[3]],
  },
  {
    contingent: contingents[1],
    players: [players[3], players[1]],
  },
  {
    contingent: contingents[2],
    players: [players[1], players[2]],
  },
];

export const bowling = [
  {
    contingent: contingents[3],
    players: [players[1]],
  },
  {
    contingent: contingents[0],
    players: [players[2]],
  },
  {
    contingent: contingents[2],
    players: [players[0]],
  },
];

export const football = [
  {
    contingent: contingents[2],
    players: [],
  },
  {
    contingent: contingents[0],
    players: [],
  },
  {
    contingent: contingents[3],
    players: [],
  },
];

export const netball = [
  {
    contingent: contingents[0],
    players: [],
  },
  {
    contingent: contingents[2],
    players: [],
  },
  {
    contingent: contingents[1],
    players: [],
  },
];

export const carromMensDoubles = [
  {
    contingent: contingents[0],
    players: [players[1], players[3]],
  },
  {
    contingent: contingents[1],
    players: [players[3], players[1]],
  },
  {
    contingent: contingents[2],
    players: [players[1], players[2]],
  },
];

export const carromMixDoubles1 = [
  {
    contingent: contingents[0],
    players: [players[1], players[3]],
  },
  {
    contingent: contingents[1],
    players: [players[3], players[1]],
  },
  {
    contingent: contingents[2],
    players: [players[1], players[2]],
  },
];

export const carromMixDoubles2 = [
  {
    contingent: contingents[0],
    players: [players[1], players[3]],
  },
  {
    contingent: contingents[1],
    players: [players[3], players[1]],
  },
  {
    contingent: contingents[2],
    players: [players[1], players[2]],
  },
];

export const sprint = [
  {
    contingent: contingents[3],
    players: [players[1]],
  },
  {
    contingent: contingents[0],
    players: [players[2]],
  },
  {
    contingent: contingents[2],
    players: [players[0]],
  },
];

export const esports = [
  {
    contingent: contingents[2],
    players: [],
  },
  {
    contingent: contingents[1],
    players: [],
  },
  {
    contingent: contingents[3],
    players: [],
  },
];

export const medivestGotTalent = [
  {
    contingent: contingents[0],
    players: [players[1]],
  },
  {
    contingent: contingents[1],
    players: [players[3], players[0], players[1]],
  },
];
