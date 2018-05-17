import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Logo = () => {
    return(
        <View style={ styles.container }>
            <Image resizeMode='contain' style={ styles.containerImage } source={ require('./images/logo.png') } />
            <Text style={ styles.textLogo }>Currency Converter</Text>
        </View>
    );
}

export default Logo;