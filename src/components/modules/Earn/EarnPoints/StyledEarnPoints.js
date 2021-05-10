import styled from "styled-components";

export const Tasks = styled.table`
  width: 90%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  text-align: left;

  th {
    font-weight: bold;
    font-family: "Holtwood One SC";
  }
`;

export const TasksRow = styled.tr`
  border-top: 1px solid lightgrey;
`;

export const TasksCategory = styled.tr`
  font-size: 0.9rem;
  border-top: 2px solid grey;
`;

export const TasksDescription = styled.td`
  padding-left: 5%;
  padding-bottom: 1%;
`;

export const TasksValue = styled.td`
  width: 15%;
  padding-bottom: 1%;
  font-family: "Holtwood One SC";
  font-size: 0.8rem;
  text-align: center;
`;
