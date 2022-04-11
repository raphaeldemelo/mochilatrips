import React from 'react';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserva, updateAmountRequest } from '../../store/modules/reserva/actions';

import {
  Reservas,
  Imagem,
  Titulo,
  BotaoLixeira,
  Botao,
  AreaQuantidade,
  BotaoQuantidade,
  Input,
} from './styles';

export default function Reserva() {

  const quantidadeReserva = useSelector(state => state.reserva);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeReserva(id));
  }

  function decrementAmount(viagem) {
    dispatch(updateAmountRequest(viagem.id, viagem.amount - 1));
  }

  function incrementAmount(viagem) {
    dispatch(updateAmountRequest(viagem.id, viagem.amount + 1));
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

            <AreaQuantidade>
              <BotaoQuantidade type='button' onClick={() => decrementAmount(reserva)}>
                <MdRemoveCircle size={25} color='#191919' />
              </BotaoQuantidade>

              <Input type='text' readOnly value={reserva.amount} />

              <BotaoQuantidade type='button' onClick={() => incrementAmount(reserva)}>
                <MdAddCircle size={25} color='#191919' />
              </BotaoQuantidade>
            </AreaQuantidade>


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