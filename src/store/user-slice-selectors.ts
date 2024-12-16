import { StateKey } from '../const';
import { State } from '../types/types';

export const getAuthorizationStatus = (state: State) => state[StateKey.User].authorizationStatus;
export const getEmail = (state: State) => state[StateKey.User].email;
