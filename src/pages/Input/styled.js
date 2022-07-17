import styled from 'styled-components';

export const InputBox = styled.input`
  /* Rectangle 29 */

box-sizing: border-box;

position: absolute;
width: 200px;
height: 56px;
left: 317px;
top: 180px;
::placeholder {
 /* Placeholder */

position: absolute;
width: 80px;
height: 20px;
left: 329px;
top: 198px;

font-family: 'Noto Sans JP';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;

/* Gray 3 */
color: #828282;
}

/* Gray 3 */
border: 1px solid #828282;
border-radius: 8px;


`;

export const InputBoxText = styled.p`
/* <Input /> */

.default { position: absolute;
width: 60px;
height: 12px;
left: 317px;
top: 131px;

font-family: 'Ubuntu Mono';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;

/* identical to box height */

/* Gray 1 */
color: #333333;
}

.hover {
/* &:hover */

position: absolute;
width: 42px;
height: 12px;
left: 587px;
top: 131px;

font-family: 'Ubuntu Mono';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 12px;

/* identical to box height */

/* Gray 3 */
color: #828282;


}

`;

export const InputBoxLabel = styled.label`
  /* Label */

position: absolute;
width: 31px;
height: 17px;
left: 317px;
top: 159px;

font-family: 'Noto Sans JP';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;

/* Gray 1 */
color: #333333;
`;

export const InputBoxHover = styled.input`
  /* Rectangle 30 */


box-sizing: border-box;
position: absolute;
width: 200px;
height: 56px;
left: 587px;
top: 180px;
border-radius: 8px;
border: 1px solid #828282;

:hover {
  /* Gray 1 */
  border: 1px solid #333333;
    }
::placeholder {
 /* Placeholder */

position: absolute;
width: 80px;
height: 20px;
left: 329px;
top: 198px;

font-family: 'Noto Sans JP';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;

/* Gray 3 */
color: #828282;
}


`;

export const InputBoxFocus = styled.input`
  box-sizing: border-box;

position: absolute;
width: 200px;
height: 56px;
left: 845px;
top: 180px;

border: 1px solid #2962FF;
border-radius: 8px;
`;
