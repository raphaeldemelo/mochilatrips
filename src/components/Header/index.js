import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useSelector } from 'react-redux';

import {
    Container,
    Logo,
    AreaContagemReserva,
    TextoReserva,
    ContagemReserva,
} from './styles';

export default function Header() {

    const quantidadeReserva = useSelector(state => state.reserva.length)

    return (
        <Container>
            <Link to='/'>
                <Logo src={logo} alt='logo mochilatrips' />
            </Link>

            <Link
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                }}
                to='/reserva'
            >
                <AreaContagemReserva>
                    <TextoReserva>Minhas Reservas</TextoReserva>
                    <ContagemReserva>{quantidadeReserva} reservas</ContagemReserva>
                </AreaContagemReserva>
            </Link>
        </Container>
    );
}