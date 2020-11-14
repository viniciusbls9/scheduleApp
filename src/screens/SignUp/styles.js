import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView `
    background-color: #232323;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const BarberImg = styled.Image `
    width: 100%;
    height: 150px;
`;

export const InputArea = styled.View `
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity `
    height: 60px;
    background-color: #DCA71B;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text `
    font-size: 18px;
    color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity `
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text `
    font-size: 16px;
    color: #fff;
`;

export const SignMessageButtonTextBold = styled.Text `
    font-size: 16px;
    color: #DCA71B;
    font-weight: bold;
    margin-left: 5px;
`;
