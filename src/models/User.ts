export interface IUser {
  _id?: any;
  name: string;
  phone: string;
  pin: string;
  oldPin?: string;
  balance: number;
  monthlyLimit: number;
  token: string;
}
