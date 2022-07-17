/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  InputBox,
  InputBoxText,
  InputBoxLabel,
  InputBoxHover,
  InputBoxFocus,
} from './styled';

export default function Input() {
  return (
    <InputBoxText>
      <InputBoxText className="default">{'<InputBox />'}</InputBoxText>
      <InputBoxLabel>Label</InputBoxLabel>
      <InputBox placeholder="Placeholder" />

      <InputBoxText className="hover">&hover</InputBoxText>
      <InputBoxHover placeholder="Placeholder" />

      <InputBoxText className="focus">:&focus</InputBoxText>
      <InputBoxFocus placeholder="Placeholder" />
    </InputBoxText>
  );
}
