import React from 'react';

export interface ILineChartProps {
	series: ISeriesItem[];
	title?: string;
	dateFormat?: IDateFormat;
	className?: string;
	style?: React.CSSProperties;
}

export type IDataItem = {
	date: Date;
	value: number;
};

export type ISeriesItem = {
	name: string;
	data: IDataItem[];
	lineColor?: string;
	fillColor?: string;
	z?: number;
};

export type IUseLineChartParams = {
	series: ISeriesItem[];
	title: string;
	dateFormat?: IDateFormat;
};

export enum IDateFormat {
	DayMonth = 'dd.MM',
	MonthYear = 'MM.yy',
	DayMonthYear = 'dd.MM.yy',
}
