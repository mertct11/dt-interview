import React, { FC, useEffect } from "react";

import "./App.css";
import Layout from "./components/Layout";
import Quadrant from "./components/Quadrant";
import Table from "./components/Table";
import styled from "styled-components";
function App() {
  const [data, setData] = React.useState<
    Array<{
      label: string;
      vision: number;
      ability: number;
      component: JSX.Element;
    }>
  >([]);

  return (
    <StyledAllApp>
      <Layout>
        <div className="left-side">
          <Quadrant data={data} setData={setData} />
        </div>
        <div className="right-side">
          <Table data={data} setData={setData} />
        </div>
      </Layout>
    </StyledAllApp>
  );
}

export default App;

const StyledAllApp = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
  .left-side {
    width: 45%;
    height: 100%;
    background-color: green;
  }
  .right-side {
    width: 55%;
    height: 100%;
    background-color: white;
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
    background-color: teal;
    .left-side {
      background-color: black;
      /* width: 100vw;
    height: 50%; */
    }
    .right-side {
      background-color: whitesmoke;
      /* width: 100vw;
    height: 50%; */
    }
  }

  /* @media screen and (max-width: 992px) {
  .left-side {
    background-color: blue;
    color: white;
  }
}
 
@media screen and (max-width: 600px) {
  body {
    background-color: olive;
    color: white;
  }
} */
`;
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import styled from 'styled-components';
// function App() {

//   const dummyData = {

//   }
//   return (
//     <StyledAllApp>
//       <div className="grid-container" >
//         <div className="grid-item">1</div>
//         <div className="grid-item">
//           <table>
//             <tr>
//               <th style={{backgroundColor:"var(--blue)",}} >Label</th>
//               <th>Vision</th>
//               <th>Ability</th>
//               <th>Delete</th>
//             </tr>
//             {
//               <tr>
//                 <input className="label-input" type="text" />
//                 <td>Maria Anders</td>
//                 <td>Germany</td>
//                 <td>Delete Btn</td>
//               </tr>
//             }

//           </table>

//         </div>
//       </div>
//     </StyledAllApp>
//   );
// }

// export default App;

// const StyledAllApp = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// margin: auto;
// margin-top: 15vh;
// width: 90%;
// height: 70vh;
// background-color: red;
// .grid-container{
//   width: 100%;
//   height: 100%;
//   background-color: green;
//   display: grid;
//   grid-template-columns: 45% 55% ;
// }
// .grid-item {
//   justify-content: center;
//   align-items: flex-start;
//   display: flex;
//   background-color: rgba(255, 255, 255, 0.8);
//   border: 1px solid rgba(0, 0, 0, 0.8);
//   .label-input{
//     background-color: red;
//     height: 25px;
//   }
// }
// table {
//   font-family: arial, sans-serif;
//   border-collapse: collapse;
//   width: 100%;
// }

// td, th {
//   border: 1px solid #dddddd;
//   text-align: left;
//   padding: 8px;
// }

// tr:nth-child(even) {
//   background-color: #dddddd;
// }
// `
