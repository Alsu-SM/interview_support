export const spacing = (base: number | string) => {
	const baseValue: number =
		typeof base === 'string' ? Number.parseFloat(base) : base;

	if (Number.isNaN(baseValue)) {
		throw new TypeError(`Некорректное значение "${base}"`);
	}

	return (...values: (number | string)[]): string =>
		values
			.map((value) => {
				const result: string | number =
					typeof value === 'string' ? value : value * baseValue;

				return typeof result === 'number'
					? result === 0
						? String(result)
						: `${String(result)}px`
					: result;
			})
			.join(' ');
};
