import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import {
  Container,
  Box,
  Card,
  Imagem,
  Botao,
  BotaoTexto,
} from './styles';

export default function Home() {

  const dispatch = useDispatch();
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    async function CarregaApi() {
      const response = await api.get('trips')
      setViagens(response.data)
    }
    CarregaApi();
  }, []);

  function handleAdicionar(viagem) {
    dispatch({
      type: 'ADD_RESERVA',
      viagem
    })
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
              onClick={() => handleAdicionar(viagem)}
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