import React, { useState } from 'react';

import api from '../../services/api';
import BarberItem from '../../components/BarberItem';
import { Container, SearchArea, SearchInput, Scroller, LoadingIcon, ListArea, EmptyWarning } from './styles';

export default () => {

    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [emptyList, setEmptyList] = useState(false);

    const handleSearchBarbers = async () => {
        setEmptyList(false);
        setLoading(true);
        setList([]);

        if (searchText != '') {
            let res = await api.search(searchText);
            if (res.error == '') {
                if (res.list.length > 0) {
                    setList(res.list);
                } else {
                    setEmptyList(true);
                }
            } else {
                alert(res.error);
            }
        }

        setLoading(false);
    }

    return (
        <Container>
            <SearchArea>
                <SearchInput
                    placeholder="Digite o nome do barbeiro"
                    placeholderTextColor="#fff"
                    value={searchText}
                    onChangeText={t => setSearchText(t)}
                    onEndEditing={handleSearchBarbers}
                    returnKeyType="search"
                    autoFocus={true}
                    selectTextOnFocus
                />
            </SearchArea>

            <Scroller>
                {loading &&
                    <LoadingIcon size="large" color="#fff" />
                }

                {emptyList &&
                    <EmptyWarning>Não achamos barbeiros com o nome "{searchText}"</EmptyWarning>
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