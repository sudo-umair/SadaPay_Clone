import {ITransaction} from '../../../models/Transaction';
import {type IUser} from '../../../models/User';

export interface TopContainerProps {
  transaction: ITransaction;
  user: IUser;
}

export interface CardProps {
  transaction: ITransaction;
}
