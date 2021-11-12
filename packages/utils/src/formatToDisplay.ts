/*!
* @function formatToDisplay
* @since v0.3.3
*/

export function formatToDisplay(amount, maxPrecision) {
	if (isNaN(amount)) return 0;
	if (!maxPrecision) maxPrecision = 100000;

	if ((amount*1 == 0 || amount * 1 >= 1) && (amount * 1).toFixed(3)*1 == Math.round(amount * 1)) return Math.round(amount);
	
	if (amount * 1 >= 1000 || amount * 1 <= -1000) {
		return Math.round(amount*1);
	} else if (amount * 1 >= 100 || amount * 1 <= -100) {
		return (amount * 1).toFixed(2);
	} else if (amount * 1 >= 10 || amount * 1 <= -10) {
		return (amount * 1).toFixed(Math.min(maxPrecision,3));
	} else if (amount * 1 >= 0.1 || amount * 1 <= -0.1) {
		return (amount * 1).toFixed(Math.min(maxPrecision,5));
	} else {
		return (amount * 1).toFixed(Math.min(maxPrecision,6));
	}
}
/** @exports formatToDisplay */                                                   
