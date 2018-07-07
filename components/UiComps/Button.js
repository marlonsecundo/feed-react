import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

const Button = ({ style, children, type }) => (
    <TouchableOpacity>
        <Text>{children}</Text>
    </TouchableOpacity> 
);

export default Button;