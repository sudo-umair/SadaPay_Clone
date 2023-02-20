import {ITransaction} from '../../../models/Transaction';
import {IUserSlice} from '../../../redux/types';

export interface TopContainerProps {
  transaction: ITransaction;
  user: IUserSlice;
}

export interface CardProps {
  transaction: ITransaction;
}
