import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ExpandIcon from '../../assets/expand.png';
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
} from './styles';

export default ({ show, setShow, user, service }) => {

    const navigation = useNavigation();

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
                    <CloseButton onPress={handleCloseButton} underlayColor="rgba(255, 255, 255, 0.8)">
                        <CloseButtonIcon source={ExpandIcon} />
                    </CloseButton>

                    <ModalItem>
                        <UserInfo>
                            <UserAvatar source={{ uri: user.avatar }} />
                            <UserName>{user.name}</UserName>
                        </UserInfo>
                    </ModalItem>
                </ModalBody>
            </ModalArea>

        </Modal>
    );
}