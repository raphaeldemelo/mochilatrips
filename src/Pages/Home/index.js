import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addReservaRequest } from '../../store/modules/reserva/actions';

import {
  Container,
  Box,
  Card,
  Imagem,
  Botao,
  BotaoTexto,
} from './styles';

export default function Home({ history }) {

  const dispatch = useDispatch();
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    async function CarregaApi() {
      const response = await api.get('trips')
      setViagens(response.data)
    }
    CarregaApi();
  }, []);

  function handleAdicionar(id) {
    dispatch(addReservaRequest(id));

 
  }

  return (
    <Container>
      <Box>
        {viagens.map(viagem => (
          <Card key={viagem.id}>
            <Imagem src={viagem.image} alt={viagem.title} />
            <strong>{viagem.title}</strong>
            <span> Status: {viagem.status ? 'Disponível' : 'Indisponível'}</span>

            <Botao
              type="button"
              onClick={() => handleAdicionar(viagem.id)}
            >
              <div>
                <MdFlightTakeoff size={16} color='#fff' />
              </div>
              <BotaoTexto>SOLICITAR A RESERVA</BotaoTexto>

            </Botao>
          </Card>
        ))}
      </Box>
    </Container>
  );
}