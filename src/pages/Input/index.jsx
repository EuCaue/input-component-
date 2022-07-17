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
      <InputBoxLabel className="hover">Label</InputBoxLabel>
      <InputBoxHover placeholder="Placeholder" />

      <InputBoxText className="focus">:&focus</InputBoxText>
      <InputBoxLabel className="focus">Label</InputBoxLabel>
      <InputBoxFocus placeholder="Placeholder" />
    </InputBoxText>
  );
}
