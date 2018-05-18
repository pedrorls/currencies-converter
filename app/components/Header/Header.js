import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Header = ({ onPress }) => {
    return(
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.button } onPress={onPress}>
                <Image resizeMode='contain' style={ styles.icon } source={ require('./images/config.png') }/>
            </TouchableOpacity>
        </View>
    );
};

Header.propTypes = {
    onPress: PropTypes.func,
};

export default Header;