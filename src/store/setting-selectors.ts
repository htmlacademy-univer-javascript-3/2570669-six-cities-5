import { StateKey } from '../const';
import { State } from '../types/types';

export const getCity = (state: State) => state[StateKey.AppSettings].cityName;
export const getSortType = (state: State) => state[StateKey.AppSettings].currentSortType;
export const getError = (state: State) => state[StateKey.AppSettings].errorMessage;
