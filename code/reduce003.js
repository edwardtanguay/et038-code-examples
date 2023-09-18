
const persons = [
  { firstName: "Hans", lastName: "Schneider", age: 42 },
  { firstName: "Sabine", lastName: "Wagner", age: 23 },
  { firstName: "Stefan", lastName: "Becker", age: 28 },
  { firstName: "Carolin", lastName: "Meyer", age: 31 },
  { firstName: "Andreas", lastName: "Schulz", age: 25 },
];

const youngPersons = persons.reduce((list, person) => {
	if (person.age < 30) {
		list.push(`${person.firstName} ${person.lastName} (${person.age})`);
	}
	return list;
}, []);

console.log(youngPersons);




