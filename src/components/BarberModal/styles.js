import styled from 'styled-components/native';

export const Modal = styled.Modal `

`;

export const ModalArea = styled.View `
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;

export const ModalBody = styled.View `
    background-color: #2e2e2e;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 300px;
    padding: 10px 20px 40px 20px;
`;

export const CloseButton = styled.TouchableHighlight `
    width: 40px;
    height: 40px;
`;

export const CloseButtonIcon = styled.Image `

`;

export const ModalItem = styled.View `
    background-color: #f7f7f7;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;
`;

export const UserInfo = styled.View `
    flex-direction: row;
    align-items: center;
`;

export const UserAvatar = styled.Image `
    width: 56px;
    height: 56px;
    border-radius: 20px;
    margin-right: 15px;
`;

export const UserName = styled.Text `
    color: #000;
    font-size: 18px;
    font-weight: bold;
`;
