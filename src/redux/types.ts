export interface IAppSlice {
  isLoading: boolean;
  isLoggedIn: boolean;
  isAuthenticated: boolean;
}

export interface IUserSlice {
  _id: string;
  name: string;
  phone: string;
  pin: string;
  token: string;
  balance: number;
  monthlyLimit: number;
}
