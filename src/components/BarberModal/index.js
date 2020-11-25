import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import ExpandIcon from '../../assets/expand.png';
import NavPrevIcon from '../../assets/nav_prev.png';
import NavNextIcon from '../../assets/nav_next.png';
import {
    Modal,
    ModalArea,
    ModalBody,
    CloseButton,
    CloseButtonIcon,
    ModalItem,
    UserInfo,
    UserAvatar,
    UserName,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    FinishButton,
    FinishButtonText,
    DateInfo,
    DateList,
    DateItem,
    DateItemWeekDay,
    DateItemDay,
    DatePrevArea,
    DataIcon,
    DateTitleArea,
    DateTitle,
    DateNextArea,
    TimeList,
    TimeItem,
    TimeText,
} from './styles';

const months = [
    'Janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
];

const days = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab'
];

export default ({ show, setShow, user, service }) => {
    const navigation = useNavigation();

    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(null);
    const [listDays, setListDays] = useState([]);
    const [listHours, setListHours] = useState([]);

    /**USEEFECT QUE TRABALHA PARA A EXIBIÇÃO DOS DIAS DISPONIVEIS DO BARBEIRO */
    useEffect(() => {
        if (user.available) {
            let daysinMonth = new Date(year, month + 1, 0).getDate();
            let newListDay = [];
            for (let i = 1; i <= daysinMonth; i++) {
                let d = new Date(year, month, i);
                let currentYear = d.getFullYear();
                let currentMonth = d.getMonth() + 1;
                let currentDay = d.getDate();
                currentMonth < 10 ? '0' + currentMonth : currentMonth;
                currentDay < 10 ? '0' + currentDay : currentDay;

                let selectDate = `${currentYear}-${currentMonth}-${currentDay}`;
                let availability = user.available.filter(e => e.date === selectDate);

                newListDay.push({
                    status: availability.length > 0 ? true : false,
                    weekDay: days[d.getDay()],
                    number: i,
                });
            }
            setListDays(newListDay);
            setDay(0);
            setListHours([]);
            setHour(0);
        }

    }, [user, month, year]);

    useEffect(() => {
        if (user.available && day > 0) {
            let d = new Date(year, month, day);
            let currentYear = d.getFullYear();
            let currentMonth = d.getMonth() + 1;
            let currentDay = d.getDate();
            currentMonth < 10 ? '0' + currentMonth : currentMonth;
            currentDay < 10 ? '0' + currentDay : currentDay;

            let selectDate = `${currentYear}-${currentMonth}-${currentDay}`;
            let availability = user.available.filter(e => e.date === selectDate);

            if (availability.length > 0) {
                setListHours(availability[0].hours);
            }
        }
        setHour(null);
    }, [user, day]);

    /**USEEFECT QUE TRABALHA PARA MOSTRAR A DATA ATUAL */
    useEffect(() => {
        let today = new Date();
        setYear(today.getFullYear());
        setMonth(today.getMonth());
        setDay(today.getDay());
    }, []);

    const handleLeftDateClick = () => {
        let mountDate = new Date(year, month, 1);
        mountDate.setMonth(mountDate.getMonth() - 1);
        setYear(mountDate.getFullYear());
        setMonth(mountDate.getMonth());
        setDay(0);
    }

    const handleRightDateClick = () => {
        let mountDate = new Date(year, month, 1);
        mountDate.setMonth(mountDate.getMonth() + 1);
        setYear(mountDate.getFullYear());
        setMonth(mountDate.getMonth());
        setDay(0);
    }

    const handleFinishClick = async () => {
        if(
            user.id &&
            service != null &&
            year > 0 &&
            month > 0 &&
            day > 0 &&
            hour != null
        ) {
            let res = await api.setAppointment(
                user.id,
                user.services[service].id,
                year,
                month + 1,
                day,
                hour
            );
            if(res.error == '') {
                setShow(false);
                navigation.navigate('Appointments');
            } else {
                alert(res.error);
            }
        } else {
            alert("Preencha todos os dados");
        }
    }


    const handleCloseButton = () => {
        setShow(false);
    }

    return (
        <Modal
            transparent={true}
            visible={show}
            animationType="slide"
        >

            <ModalArea>
                <ModalBody>
                    <CloseButton onPress={handleCloseButton} underlayColor="transparent">
                        <CloseButtonIcon source={ExpandIcon} />
                    </CloseButton>

                    <ModalItem>
                        <UserInfo>
                            <UserAvatar source={{ uri: user.avatar }} />
                            <UserName>{user.name}</UserName>
                        </UserInfo>
                    </ModalItem>

                    {service != null &&
                        <ModalItem>
                            <ServiceInfo>
                                <ServiceName>{user.services[service].name}</ServiceName>
                                <ServicePrice>R$ {user.services[service].price.toFixed(2)}</ServicePrice>
                            </ServiceInfo>
                        </ModalItem>
                    }

                    <ModalItem>
                        <DateInfo>
                            <DatePrevArea onPress={handleLeftDateClick}>
                                <DataIcon source={NavPrevIcon} />
                            </DatePrevArea>
                            <DateTitleArea>
                                <DateTitle>{months[month]} {year}</DateTitle>
                            </DateTitleArea>
                            <DateNextArea onPress={handleRightDateClick}>
                                <DataIcon source={NavNextIcon} />
                            </DateNextArea>
                        </DateInfo>

                        <DateList horizontal={true} showsHorizontalScrollIndicator={false}>
                            {listDays.map((item, key) => (
                                <DateItem
                                    key={key}
                                    onPress={() => item.status ? setDay(item.number) : ''}
                                    style={{
                                        opacity: item.status ? 1 : 0.2,
                                        backgroundColor: item.number === day ? '#DCA71B' : '#ddd'
                                    }}
                                >
                                    <DateItemWeekDay>{item.weekDay}</DateItemWeekDay>
                                    <DateItemDay>{item.number}</DateItemDay>
                                </DateItem>
                            ))}
                        </DateList>
                    </ModalItem>

                    {day > 0 && listHours.length > 0 &&
                        <ModalItem>
                            <TimeList horizontal={true} showsHorizontalScrollIndicator={false}>
                                {listHours.map((item, key) => (
                                    <TimeItem key={key} onPress={() => setHour(item)} style={{
                                        backgroundColor: item === hour ? '#DCA71B' : '#ddd'
                                    }}>
                                        <TimeText>{item}</TimeText>
                                    </TimeItem>
                                ))}
                            </TimeList>
                        </ModalItem>
                    }

                    <FinishButton onPress={handleFinishClick}>
                        <FinishButtonText>Finalizar Agendamento</FinishButtonText>
                    </FinishButton>

                </ModalBody>
            </ModalArea>

        </Modal>
    );
}