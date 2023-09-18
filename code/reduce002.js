
const users = [
	{ name: "Anna", score: 85 },
	{ name: "Max", score: 92 },
	{ name: "Sophie", score: 78 },
	{ name: "Lukas", score: 95 },
	{ name: "Hannah", score: 88 }
];

console.log(users.length);

const scoreData = users.reduce((obj, user) => {
	obj.names.push(user.name);
	obj.highestScore = obj.highestScore < user.score ? user.score : obj.highestScore;
	obj.lowestScore = obj.lowestScore > user.score ? user.score : obj.lowestScore;
	return obj;
}, {
	names: [],
	highestScore: 0,
	lowestScore: 999
});

console.log(scoreData);





