export type ITransaction = {
  _id: any;
  title: string;
  amount: number;
  type: 'incoming' | 'outgoing';
  date: string;
  from: {
    name: string;
    phone: string;
  };
  to: {
    name: string;
    phone: string;
  };
};
