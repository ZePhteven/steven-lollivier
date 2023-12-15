import { decimalRound } from './number';

export const getYearDiff = (start: Date, end: Date): number => {
	const timeDifference = end.getTime() - start.getTime();
	const days = decimalRound(timeDifference / (1000 * 3600 * 24 * 30 * 12));
	return days;
};
