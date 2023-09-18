

const microservices = [
  { title: "User Authentication", isAvailable: true },
  { title: "Payment Gateway", isAvailable: true },
  { title: "Notification Service", isAvailable: false },
  { title: "Data Analytics", isAvailable: true },
  { title: "User Profile Management", isAvailable: false },
];

if (microservices.every(m => m.isAvailable === true)) {
	console.log('processing...');
} else {
	console.log('all services are not yet available');
}


