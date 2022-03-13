export const range = (start, end) => {
	const numStart = Number(start);
	const numEnd = Number(end);
	const length = numEnd - numStart + 1;

	if (numStart < 0 || numEnd < 0) {
		return [];
	}

	return Array.from({ length }, (_, idx) => idx + numStart);
};
