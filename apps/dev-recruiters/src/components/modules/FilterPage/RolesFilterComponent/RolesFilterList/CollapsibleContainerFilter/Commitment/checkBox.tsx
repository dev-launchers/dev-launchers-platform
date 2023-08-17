import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.label`
<<<<<<< HEAD
<<<<<<< HEAD
=======
  /* Estilização do container do checkbox */
>>>>>>> 2bc7ee42 (fix: bug fix)
=======
>>>>>>> e99587eb (fix: fixing the design)
  display: inline-block;
  position: relative;
  cursor: pointer;

<<<<<<< HEAD
<<<<<<< HEAD
=======
  /* Estilos do checkbox oculto */
>>>>>>> 2bc7ee42 (fix: bug fix)
=======
>>>>>>> e99587eb (fix: fixing the design)
  input[type='checkbox'] {
    display: none;
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
  /* Estilos do "V" quando o checkbox está marcado */
>>>>>>> 2bc7ee42 (fix: bug fix)
=======
>>>>>>> e99587eb (fix: fixing the design)
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
<<<<<<< HEAD
=======
  /* Estilos do container quando o checkbox está marcado */
>>>>>>> 2bc7ee42 (fix: bug fix)
=======
>>>>>>> e99587eb (fix: fixing the design)
  input[type='checkbox']:checked + span {
    background-color: black;
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
  /* Estilos do container quando o checkbox não está marcado */
>>>>>>> 2bc7ee42 (fix: bug fix)
=======
>>>>>>> e99587eb (fix: fixing the design)
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
<<<<<<< HEAD
=======
// Exemplo de uso:
// <NikeStyledCheckbox isChecked={isFilterActive} onChange={handleCheckboxChange} />

>>>>>>> 2bc7ee42 (fix: bug fix)
=======
>>>>>>> e99587eb (fix: fixing the design)
export default StyledCheckbox;
