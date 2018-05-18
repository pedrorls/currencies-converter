import React from 'react';
import EStylesheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStylesheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF',
    $borderColor: '#E5E5E5',
    $inputTextColor: '#797979',
    $lightGray: '#F0F0F0'
});

export default () => <Home />;