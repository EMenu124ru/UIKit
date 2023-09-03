import React from 'react';

import { Button } from './button';

export const BasicButton = () => {
  return (
    <Button>hello world!</Button>
  );
}

export const BasicDisabledButton = () => {
  return (
    <Button disabled>hello world!</Button>
  );
}

export const TextButton = () => {
  return (
    <Button variant='text'>hello world!</Button>
  );
}

export const OutlinedButton = () => {
  return (
    <Button variant='outlined'>hello world!</Button>
  );
}