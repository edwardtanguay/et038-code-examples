
const words = ['Apfel', 'Zebra', 'Aerodynamik', 'Äpfel'];

console.log(words.sort());

console.log(words.sort((a,b) => a.localeCompare(b, 'de-DE')));


