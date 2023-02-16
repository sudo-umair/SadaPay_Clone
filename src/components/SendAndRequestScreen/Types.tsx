import React from 'react';

export interface CustomHeaderTextProps {
  balance: string | number;
}

export interface InputAmountProps {
  amount: number;
  info: string;
  showInfo: boolean;
  setShowInfo?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface KeyPadProps {
  onPress: (text: string) => void;
}

export interface ButtonsContainerProps {
  onRequestPress: () => void;
  onSendPress: () => void;
  amount: number;
}

export interface ButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
}
