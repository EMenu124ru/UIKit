import React from 'react';
import { Input as InputUnstyled, InputOwnProps } from '@mui/base';
import styles from './input.module.scss'

export type InputProps = InputOwnProps;

export function Input({ ...props }: InputProps) {
  return (
    <InputUnstyled {...props} className={styles.inputWrapper} />
  );
}
