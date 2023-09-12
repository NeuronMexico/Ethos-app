export const SET_IS_LOGGED = 'SET_IS_LOGGED';

export interface SessionInterface {
  isLogged: boolean;
}

interface SetIsLoggedAction {
  type: typeof SET_IS_LOGGED;
  data: boolean;
}

export type SessionActionTypes = SetIsLoggedAction;
export type AccessType = 'google' | 'apple' | 'email';
export type AuthErrorType = 'wrongPassword' | 'userNotFound' | 'emailAlreadyInUse'
| 'invalidEmail' | 'someWrong';
export type PasswordsErrorType = 'alreadyExist' | 'someWrong';
