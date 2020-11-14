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

export const LoadingIcon = styled.ActivityIndicator `
    margin-top: 50px;
`;