export interface JwtPayload {
  sub: string;   // user id
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export interface LoginResult {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}
