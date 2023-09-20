function filledOrders(order, k) {
	order.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < order.length; i++) {
		sum += order[i];
		if (sum > k) {
			return i;
		}
	}
	return order.length;
}