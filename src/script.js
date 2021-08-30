/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
// Section 9: Data Structures, Modern Operators and String
// Coding challenge 1

// eslint-disable-next-line no-unused-vars
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// eslint-disable-next-line no-unused-vars
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Solution String Method Practise
const flights =
  '_Delayed_Departure;fao123;txl123;11:25+_Arrival;bru123;fao123;11:45+_Delayed_Arrival;hel123;fao123;12:45+_Departure;fao123;lis123;12:30';
const arrText = flights.split('+');
const getCode = t => t.slice(0, 3).toUpperCase();
for (const t of arrText) {
  const [state, from, to, time] = t.split(';');
  const output = `${
    state.startsWith('_Delayed') ? '⛔' : ''
  } ${state.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(
    to
  )} at ${time.replace(':', 'h')}`;
  console.log(output.padStart(70));
}

// Solution Coding Challenge 4
// const button = document.querySelector('button');
// function transformCamelCase() {
//   const text = document.querySelector('textarea').value;
//   const arrText = text.split('\n');
//   for (const [index, t] of arrText.entries()) {
//     const [first, second] = t.toLowerCase().trim().split('_');
//     const camelText = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${camelText.padEnd(20)}${'😘'.repeat(index + 1)}`);
//   }
// }
// button.addEventListener('click', transformCamelCase);

// Solution Coding Challenge 3
// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);

// // 3.
// const time = Array.from(gameEvents.keys()).pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const [min, event] of gameEvents) {
//   const ele = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${ele} HALF] ${min}: ${event}`);
// }

// Solution Coding Challenge 2
// const lstscore = game.scored;
// // let index = 1;
// for (const [index, player] of lstscore.entries()) {
//   console.log(`Goal ${index}: ${player}`);
//   // index += 1;
// }

// let total = 0;
// const arrOdds = Object.values(game.odds);
// for (const item of arrOdds) {
//   total += item;
// }
// const average = total / arrOdds.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// const scorers = {};
// const arrScorer = game.scored;
// for (const scorer of arrScorer) {
//   // console.log(index, scorer);
//   // scorers[scorer] = 0;
//   scorers[scorer] = scorers[scorer] ? (scorers[scorer] += 1) : 1;
// }
// console.log(scorers);

// Solution Coding Challenge 1
// console.log(game);
// const [players1, players2] = game.players;
// console.log(players1, players2);
// const [gk, ...fieldsPlayers] = players1;
// console.log(gk, fieldsPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// const printGoals = (...players) => {
//   console.log(players);
//   console.log(players.length);
// };
// printGoals(...game.scored);
// team1 > team2 && console.log("Team 1 win");
// team2 > team1 && console.log("Team 2 win");

// Section 16: Asynchonorous Javascript
// Coding challenge 1
// const API_KEY = "4966981695043073690x80367";
// const whereAmI = (lat, lng) => {
//   fetch(`https://geocode.xyz/${lat},${lng}?json=1&auth=${API_KEY}`)
//     .then((res) => {
//       if (res.status === 403) {
//         throw new Error("Request too fast");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       const { country } = data;
//       return fetch(`https://restcountries.eu/rest/v2/name/${country}`);
//     })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Country not found");
//       }
//       return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.error(`Error: ${err}`));
// };

// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// whereAmI(52.508, 13);
