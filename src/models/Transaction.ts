export type ITransaction = {
  _id: any;
  title: string;
  amount: number;
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
