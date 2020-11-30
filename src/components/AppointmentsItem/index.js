import React from 'react';
import {
    Area,
    UserArea,
    Avatar,
    UserName,
    SplitArea,
    ServiceText,
    DateText,
} from './styles';

export default ({ data }) => {

    let d = data.datetime.split(' ');
    let time = d[1].substring(0,5);

    let date = new Date(d[0]);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? '0'+month : month;
    day = day < 10 ? '0'+day : day;
    let dateString = `${day}/${month}/${year}`;

    return (
        <Area>
            <UserArea>
                <Avatar source={{ uri: data.barber.avatar }} />
                <UserName>{data.barber.name}</UserName>
            </UserArea>

            <SplitArea>
                <ServiceText>{data.service.name}</ServiceText>
                <ServiceText>R$ {data.service.price.toFixed(2)}</ServiceText>
            </SplitArea>

            <SplitArea>
                <DateText>{dateString}</DateText>
                <DateText>{time}</DateText>
            </SplitArea>
        </Area>
    );
}