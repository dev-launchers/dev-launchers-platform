import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.label`
<<<<<<< HEAD
=======
  /* Estilização do container do checkbox */
>>>>>>> 2bc7ee42 (fix: bug fix)
  display: inline-block;
  position: relative;
  cursor: pointer;

<<<<<<< HEAD
=======
  /* Estilos do checkbox oculto */
>>>>>>> 2bc7ee42 (fix: bug fix)
  input[type='checkbox'] {
    display: none;
  }

<<<<<<< HEAD
=======
  /* Estilos do "V" quando o checkbox está marcado */
>>>>>>> 2bc7ee42 (fix: bug fix)
  input[type='checkbox']:checked + span::before {
    content: '✔';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: bold;
    color: white;
  }

<<<<<<< HEAD
=======
  /* Estilos do container quando o checkbox está marcado */
>>>>>>> 2bc7ee42 (fix: bug fix)
  input[type='checkbox']:checked + span {
    background-color: black;
  }

<<<<<<< HEAD
=======
  /* Estilos do container quando o checkbox não está marcado */
>>>>>>> 2bc7ee42 (fix: bug fix)
  span {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: white;
    border: 2px solid black;
    border-radius: 4px;
    transition: background-color 0.2s;
  }
`;

const StyledCheckbox = ({ isChecked, onChange }) => (
  <Checkbox>
    <input type="checkbox" checked={isChecked} onChange={onChange} />
    <span></span>
  </Checkbox>
);

<<<<<<< HEAD
=======
// Exemplo de uso:
// <NikeStyledCheckbox isChecked={isFilterActive} onChange={handleCheckboxChange} />

>>>>>>> 2bc7ee42 (fix: bug fix)
export default StyledCheckbox;
