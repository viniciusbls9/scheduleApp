import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import BarberItem from '../../components/BarberItem';
import { HeaderArea, HeaderTitle, Container, Scroller, ListArea, EmptyWarning, } from './styles';

export default () => {

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        getAppointments();
    }, []);

    const getAppointments = async () => {
        setLoading(true);
        setList([]);

        let res = await api.getAppointments();
        if (res.error == '') {
            setList(res.list);
        } else {
            alert(res.error);
        }

        setLoading(false);
    }

    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>
                    Favoritos (Atualizar)
                </HeaderTitle>
            </HeaderArea>

            <Scroller>

                {!loading && list.length === 0 &&
                    <EmptyWarning>Não há agendamentos</EmptyWarning>
                }

                <ListArea>
                    {list.map((item, key) => (
                        <BarberItem key={key} data={item} />
                    ))}
                </ListArea>
            </Scroller>

        </Container>
    )
}