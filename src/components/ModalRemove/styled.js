import styled from 'styled-components';

export const DivModal = styled.div`
position: fixed;
left: 750px;
width: 347px;
height: 130px;
margin-top: 180px;
background: white;
border-radius: 10px;
z-index: 999;

@media(max-width:1180px){
    width: 240px;
    top: 190px;
    left: 83px;
}
`;

export const Button = styled.button`
cursor: pointer;

background-color: ${(props) => (props.variant === 'primary' ? 'black' : 'white')};
color: ${(props) => (props.variant === 'primary' ? 'white' : 'black')};
width: 60px;
border:  solid 1px black;
border-radius: 5px;


`;

export const DivButton = styled.div`
display: flex;
flex-direction: row;
margin: 20px 5px 20px 90px;
gap: 40px;

@media(max-width:1180px){
display: flex;
flex-direction: row;
margin: 20px 5px 20px 45px;
gap: 30px;
}

`;

export const Title = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 15px;
text-align: center;
margin: 31px 24px 0 24px;

color: #000000;

@media(max-width:1180px){
    font-size: 13px;
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