import { IStoreType } from './types';

export const selectSelf = <TSlice>(state: TSlice) => state;

export const selectSelfWithParams = <TSlice, TParams>(
	state: TSlice,
	params: TParams,
) => ({
	state,
	params,
});

export const selectDataSlice = (state: IStoreType) => state.dataSlice;
export const selectAppThemeSlice = (state: IStoreType) => state.appThemeSlice;
