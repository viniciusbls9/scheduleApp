import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';

import api from '../../services/api';
import BarberItem from '../../components/BarberItem';
import { HeaderArea, HeaderTitle, Container, Scroller, ListArea, EmptyWarning, } from './styles';

export default () => {

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        getFavorites();
    }, []);

    const getFavorites = async () => {
        setLoading(true);
        setList([]);

        let res = await api.getFavorites();
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
                    Favoritos
                </HeaderTitle>
            </HeaderArea>

            <Scroller
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={getFavorites} />
                }
            >

                {!loading && list.length === 0 &&
                    <EmptyWarning>Não há favoritos</EmptyWarning>
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