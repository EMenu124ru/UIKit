import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { Button as UnstyledButton, ButtonOwnProps } from '@mui/base';
import classnames from 'classnames'
import styles from './button.module.scss'

export type ButtonProps = ButtonOwnProps & {
  variant?: 'contained'
  | 'outlined'
  | 'text',
  disabled?: boolean,
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ variant='contained', disabled=false, children, ...props}) => {
  let className;
  const disabledClassName = disabled ? 'disabled' : ''
  switch (variant) {
    case 'contained':
      className = 'contained'
      break
    case 'outlined':
      className = 'outlined'
      break
    case 'text':
      className = 'text'
      break
    default: 
      className = 'contained'
      break
  }

  return (
    <UnstyledButton className={classnames(styles[className], styles[disabledClassName])} {...props}>
      {children}
    </UnstyledButton>
  );
}
