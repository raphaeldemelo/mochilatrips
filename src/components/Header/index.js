import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

import {
    Container,
    Logo,
    AreaContagemReserva,
    TextoReserva,
    ContagemReserva,
} from './styles';

export default function Header() {
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
                    <ContagemReserva>3 reservas</ContagemReserva>
                </AreaContagemReserva>
            </Link>
        </Container>
    );
}