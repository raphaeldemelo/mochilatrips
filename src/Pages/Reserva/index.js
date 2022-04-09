import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import {
  Reservas,
  Imagem,
  Titulo,
  BotaoLixeira,
  Botao,
} from './styles';

export default function Reserva() {

  const quantidadeReserva = useSelector(state => state.reserva);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch({
      type: 'REMOVE_RESERVA',
      id,
    })
  }

  return (
    <div>
      <Titulo>Você solicitou {quantidadeReserva.length} reservas</Titulo>

      {
        quantidadeReserva.map(reserva => (
          <Reservas key={reserva.id}>
            <Imagem
              src={reserva.image}
              alt={reserva.title}
            />
            <strong>{reserva.title}</strong>
            <span> Quantidade: {reserva.amount}</span>
            <BotaoLixeira
              type='button'
              onClick={() => handleDelete(reserva.id)}
            >
              <MdDelete size={20} color='#191919' />
            </BotaoLixeira>
          </Reservas>
        ))
      }



      <footer>
        <Botao type='button'>Solicitar Reservas</Botao>
      </footer>
    </div >
  );
}