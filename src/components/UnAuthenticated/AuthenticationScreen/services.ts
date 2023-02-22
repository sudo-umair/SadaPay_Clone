import {Input} from './Types';

export const objectData = (data: Input): string => {
  const {inp1, inp2, inp3, inp4, inp5} = data;
  return `${inp1}${inp2}${inp3}${inp4}${inp5}`;
};
