import {ITransaction} from '../../../models/Transaction';

export interface IMonths {
  [key: number]: string;
}

export interface TransactionItemProps {
  item: ITransaction;
  index: number;
}
