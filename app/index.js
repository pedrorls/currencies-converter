import React from 'react';
import EStylesheet from 'react-native-extended-stylesheet';
import StackNavigator from './config/routes';


EStylesheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',
    $white: '#FFFFFF',
    $borderColor: '#D4D4D4',
    $inputTextColor: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',
});

export default () => <StackNavigator/>;