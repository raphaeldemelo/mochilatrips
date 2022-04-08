import React from 'react';
import { MdDelete } from 'react-icons/md';


import {
  Reservas,
  Imagem,
  Titulo,
  BotaoLixeira,
  Botao,
} from './styles';

export default function Reserva() {
  return (
    <div>
      <Titulo>Você solicitou 1 reservas</Titulo>

      <Reservas>
        <Imagem
          src='https://sujeitoprogramador.com/wp-content/uploads/2019/12/fernand-noronha.jpg'
          alt='Fernando de Noronha'
        />
        <strong>Viagem Fernando de Noronha 10 dias</strong>
        <span> Quantidade: 2</span>
        <BotaoLixeira
          type='button'
          onClick={() => { }}
        >
          <MdDelete size={20} color='#191919' />
        </BotaoLixeira>
      </Reservas>

      <footer>
        <Botao type='button'>Solicitar Reservas</Botao>
      </footer>
    </div>
  );
}