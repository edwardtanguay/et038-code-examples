
const scores = [
	{ name: "Anna", score: 85 },
	{ name: "Max", score: 92 },
	{ name: "Sophie", score: 78 },
	{ name: "Lukas", score: 95 },
	{ name: "Hannah", score: 88 }
];

console.log(scores.sort((a,b) => a.score > b.score ? -1 : 1));

console.log(scores.sort((a,b) => a.name > b.name ? 1 : -1));
