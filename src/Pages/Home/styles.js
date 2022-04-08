import styled from 'styled-components';

export const Container = styled.div`

`;

export const Box = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 30px;
list-style: none;
`;

export const Card = styled.li`
display: flex;
flex-direction: column;
background: #FFF;
border-radius: 4px;
padding: 13px;
align-items: center;
`;

export const Imagem = styled.img`
max-width: 280px;
max-height: 220px;
border-radius: 4px;
`;

export const Titulo = styled.strong`
font-size:16px;
line-height: 20px;
color: #191919;
margin-top: 10px;
`;

export const Botao = styled.button`
margin-top: auto;
display: flex;
align-items: center;
justify-content: center;
color: #FFF;
background: #191919;
border:0;
padding: 10px;
border-radius: 5px;
`;

export const BotaoTexto = styled.span`
font-weight: bold;
margin-left: 5px
`;