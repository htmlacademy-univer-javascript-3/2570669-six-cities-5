const PROFILE_KEY_NAME = 'six-cities-profile-picture';
export const saveProfileImg = (picture: string): void => {
  localStorage.setItem(PROFILE_KEY_NAME, picture);
};
export const getProfileImg = (): string => {
  const token = localStorage.getItem(PROFILE_KEY_NAME);
  return token ?? '';
};
export const removeProfileImg = (): void => {
  localStorage.removeItem(PROFILE_KEY_NAME);
};
