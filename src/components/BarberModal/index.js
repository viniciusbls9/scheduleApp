import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
    DatePrevArea,
    DataIcon,
    DateTitleArea,
    DateTitle,
    DateNextArea,
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
    'Sab,'

];

export default ({ show, setShow, user, service }) => {

    const navigation = useNavigation();

    const handleFinishClick = () => {

    }

    console.log(service);

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
                            <DatePrevArea>
                                <DataIcon source={NavPrevIcon} />
                            </DatePrevArea>
                            <DateTitleArea>
                                <DateTitle>Novembro 2020</DateTitle>
                            </DateTitleArea>
                            <DateNextArea>
                                <DataIcon source={NavNextIcon} />
                            </DateNextArea>
                        </DateInfo>
                    </ModalItem>

                    <FinishButton onPress={handleFinishClick}>
                        <FinishButtonText>Finalizar Agendamento</FinishButtonText>
                    </FinishButton>

                </ModalBody>
            </ModalArea>

        </Modal>
    );
}