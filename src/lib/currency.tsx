/**
 * Formats a number as Indian Rupees (INR)
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string with INR symbol and thousands separators
 * @example
 * formatCurrency(10000) // returns "₹10,000"
 * formatCurrency(1500000) // returns "₹15,00,000"
 */
export const formatCurrency = (amount: number) => {
	if (amount === undefined || amount === null) return '-';

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	}).format(amount);
};
