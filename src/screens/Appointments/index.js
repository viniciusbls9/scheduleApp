import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import AppointmentsItem from '../../components/AppointmentsItem';
import { Container, Scroller, ListArea, EmptyWarning, } from './styles';
import { RefreshControl } from 'react-native';

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
            <Scroller
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={getAppointments} />
                }
            >

                {!loading && list.length === 0 &&
                    <EmptyWarning>Não há agendamentos</EmptyWarning>
                }

                <ListArea>
                    {list.map((item, key) => (
                        <AppointmentsItem key={key} data={item} />
                    ))}
                </ListArea>
            </Scroller>

        </Container>
    )
}