import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
function App() {

  const dummyData = {

  }
  return (
    <StyledAllApp>
      <div className="grid-container" >
        <div className="grid-item">1</div>
        <div className="grid-item">
          <table>
            <tr>
              <th style={{backgroundColor:"var(--blue)",}} >Label</th>
              <th>Vision</th>
              <th>Ability</th>
              <th>Delete</th>
            </tr>
            {
              <tr>
                <input className="label-input" type="text" />
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Delete Btn</td>
              </tr>
            }

          </table>

        </div>
      </div>
    </StyledAllApp>
  );
}

export default App;

const StyledAllApp = styled.div` 
display: flex;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 15vh;
width: 90%;
height: 70vh;
background-color: red;
.grid-container{
  width: 100%;
  height: 100%;
  background-color: green;
  display: grid;
  grid-template-columns: 45% 55% ; 
} 
.grid-item {
  justify-content: center;
  align-items: flex-start;
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);  
  .label-input{
    background-color: red;
    height: 25px;
  }
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
`
