

const orders = [
	{ 
		orderID: 1001,
		customerName: "Anna Schmidt",
		products: ["Widget A", "Widget B", "Widget C"],
		orderTotal: 245.75,
		orderDate: "2023-09-19",
		readyForProcessing: true 
	},
	{ 
		orderID: 1002,
		customerName: "Max Darenfeld",
		products: ["Widget D", "Widget E"],
		orderTotal: 120.50,
		orderDate: "2023-09-20",
		readyForProcessing: false 
	},
	{ 
		orderID: 1003,
		customerName: "Sophie Beinroth",
		products: ["Widget A", "Widget F"],
		orderTotal: 75.00,
		orderDate: "2023-09-21",
		readyForProcessing: false 
	},
];

if (orders.some(m => m.readyForProcessing)) {
	console.log('starting processing...');
} else {
	console.log('no orders to process');
}





