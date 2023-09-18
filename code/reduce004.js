

const books = [
	{ title: "The Great Gatsby", stars: 3 },
	{ title: "To Kill a Mockingbird", stars: 1 },
	{ title: "Pride and Prejudice", stars: 2 },
	{ title: "1984", stars: 5 },
	{ title: "The Catcher in the Rye", stars: 3 },
	{ title: "The Hobbit", stars: 5 },
	{ title: "Being and Nothingness", stars: 5 },
	{ title: "Harry Potter and the Sorcerer's Stone", stars: 4 },
	{ title: "The Lord of the Rings", stars: 5 },
	{ title: "War and Peace", stars: 2 },
	{ title: "Crime and Punishment", stars: 3 }
];

const starData = books.reduce((obj, book, index, arr) => {
	if (obj[`${book.stars} stars`] === undefined) {
		obj[`${book.stars} stars`] = 1;
	} else {
		++obj[`${book.stars} stars`];
	}

	// reorder the star data from 1-5
	if (index === arr.length - 1) {
		const pairs = Object.entries(obj);
		console.log(pairs);
		pairs.sort();
		console.log(pairs);
		obj = Object.fromEntries(pairs);
	}
	return obj;
}, {});

console.log(starData);



