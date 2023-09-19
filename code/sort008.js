
const players = [
	{ name: "Anna", score: 85 },
	{ name: "Max", score: 92 },
	{ name: "Sophie", score: 78 },
	{ name: "Lukas", score: 85 },
	{ name: "Hannah", score: 88 },
	{ name: "Eva", score: 89 },
	{ name: "Daniel", score: 97 },
	{ name: "Emma", score: 85 },
	{ name: "Oliver", score: 91 },
	{ name: "Mia", score: 86 },
	{ name: "Liam", score: 93 },
	{ name: "Isabella", score: 85 },
	{ name: "Noah", score: 90 },
	{ name: "Ava", score: 85 },
	{ name: "Lucas", score: 94 },
	{ name: "Sophia", score: 79 },
	{ name: "William", score: 96 },
	{ name: "Charlotte", score: 82 },
	{ name: "James", score: 88 },
	{ name: "Olivia", score: 83 }
];

console.log(players.sort((a, b) => {
	if (a.score !== b.score) {
		return a.score > b.score ? 1 : -1;
	} else {
		return a.name > b.name ? 1 : -1;
	}
}));



