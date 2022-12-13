
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyleFont = createGlobalStyle`
*{
    font-family:'Montserrat', sans-serif;
    }
`;

export const Overlay = styled.div`
background-color: blue;
/* opacity: 0.1; */
width: 100vh;
height: 100vh;
`;


export const ContainerModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 305px;
width: 433px;
left: 500px;
top: 205px;
border-radius: 10px;
background-color: #D9D9D9;
position: fixed;

`;

export const Input = styled.input`
height: 38px;
width: 320px;
left: 570px;
top: 515px;
padding: 16px;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
background: rgba(204, 204, 204, 0.16);
border: 1px solid #4F4F4F;
border-radius: 56px;
margin-top: 20px;

`;

export const ContainerInput = styled.div`
margin: 82px 56px 41px 57px;
`;

export const InputNome= styled.input`
height: 38px;
width: 320px;
left: 570px;
top: 457px;
border-radius: 56px;
padding: 16px;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 16px;
background: rgba(204, 204, 204, 0.16);
border: 1px solid #4F4F4F;
border-radius: 56px;
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 51px;
width: 320px;
left: 570px;
top: 588px;
border-radius: 4px;
background: #000000;
/* font-family: 'Montserrat'; */
font-size: 20px;
font-weight: 600;
line-height: 20px;
text-align: left;
color: #FFFFFF;
margin-top: 35px;
`;

export const Text = styled.h1`
position: absolute;
width: 288px;
height: 20px;
margin-top: 20px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 100%;
text-align: center;
color: #000000;
`;

export const Img = styled.img`
position: absolute;
margin: 8px 8px 275px 403px;
cursor: pointer;
`;