
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyleFont = createGlobalStyle`
*{
    font-family:'Montserrat', sans-serif;
    }
`;

export const ContainerModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 305px;
width: 433px;
left: 700px;
top: 255px;
border-radius: 10px;
background-color:white;
position: fixed;

@media(max-width:1180px){
    width: 200px;
    top: 200px;
    left: 90px;
    height: 270px;
}
`;

export const Container = styled.div`
background-color:rgba(0, 0, 0, 0.8);
position: absolute;
width: 100%;
height: 147vh;

@media(max-width:1180px){
    height: 645vh;
}
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

@media(max-width:1180px){
    width: 180px;
    top: 200px;
    left: 10px;
}
`;

export const ContainerInput = styled.div`
margin: 82px 56px 41px 57px;

@media(max-width:1180px){
    width: 180px;
    top: 200px;
    left: 10px;
}
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

@media(max-width:1180px){
    width: 180px;
    top: 200px;
    left: 10px;
}
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
font-size: 20px;
font-weight: 600;
line-height: 20px;
text-align: left;
color: #FFFFFF;
margin-top: 35px;
cursor: pointer;

@media(max-width:1180px){
    width: 180px;
    top: 200px;
    left: 10px;
    height: 31px;
    width: 180px;
    font-size: 17px;
}
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

@media(max-width:1180px){
    font-size: 15px;
    margin-top: 50px;
}
`;

export const Img = styled.img`
position: absolute;
margin: 8px 8px 275px 403px;
cursor: pointer;

@media(max-width:1180px){
    display: none;
}
`;

