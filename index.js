// code your solution here
function superbowlWin(record) {
	let tournmentRecord = record.find(function (tournmentRecord ) {
		return tournmentRecord .result === "W";
	});
	if (typeof tournmentRecord  === "undefined") {
		return undefined;
	} else {
		return tournmentRecord .year;
	}
}
