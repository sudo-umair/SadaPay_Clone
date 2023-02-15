export interface ITransaction {
  _id: any;
  title: string;
  amount: number;
  type: 'incoming' | 'outgoing';
  date: string;
}

export interface IMonths {
  [key: number]: string;
}
