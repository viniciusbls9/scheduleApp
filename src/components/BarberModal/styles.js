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
    background-color: #ddd;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 14px;
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

export const ServiceInfo = styled.View `
    flex-direction: row;
    justify-content: space-between;
`;

export const ServiceName = styled.Text `
    font-size: 16px;
    font-weight: bold;
`;

export const ServicePrice = styled.Text `
    font-size: 16px;
    font-weight: bold;
`;


export const DateInfo = styled.View `
    flex-direction: row;
`;

export const DateList = styled.ScrollView `

`;

export const DateItem = styled.TouchableOpacity `
    width: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 5px 0;
    margin-top: 20px;
`;

export const DateItemWeekDay = styled.Text `
    font-size: 16px;
    font-weight: bold;
`;

export const DateItemDay = styled.Text `
    font-size: 16px;
    font-weight: bold;
`;


export const DatePrevArea = styled.TouchableOpacity `
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const DataIcon = styled.Image `
    width: 27px;
    height: 27px;
`;

export const DateTitleArea = styled.View `
    width: 140px;
    justify-content: center;
    align-items: center;
`;

export const DateTitle = styled.Text `
    font-size: 15px;
    font-weight: bold;
    color: #000;
`;

export const DateNextArea = styled.TouchableOpacity `
    flex: 1;
    align-items: flex-start;
`;


export const FinishButton = styled.TouchableOpacity `
    background-color: #ddd;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
    
export const FinishButtonText = styled.Text `
    font-size: 15px;
`;

export const TimeList = styled.ScrollView `

`;

export const TimeItem = styled.TouchableOpacity `
    width: 75px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 10px;
`;

export const TimeText =styled.Text `
    font-size: 16px;
    color: #000;
`;