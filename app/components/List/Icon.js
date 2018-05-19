import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';
import styles from './styles';

const Icon = ({ checkmark, visible, iconBackgroundColor }) => {
    const iconStyles = [styles.icon] ;
    if(visible){
        iconStyles.push(styles.iconVisible);
    }

    if(iconBackgroundColor){
        iconStyles.push({ backgroundColor: iconBackgroundColor });
    }

    return(
        <View style={iconStyles}>
        {checkmark ? <Image
            resizeMode='contain'
            source={ require('./images/check.png') }
            style={styles.checkIcon}
            /> : null }
        </View>
    );

};

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackgroundColor: PropTypes.string,
};

export default Icon;