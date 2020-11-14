import React from 'react';

import { InputArea, IconImage, Input } from './styles';
export default ({ IconPng, placeholder, value, onChangeText }) => {
    return (
        <InputArea>
            <IconImage source={IconPng} />

            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </InputArea>
    );
}