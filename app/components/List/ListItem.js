import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import Icon from './Icon';
import styles from './styles';


const ListItem = ({ text, onPress, selected=false, checkmark=true, visible=true, customIcon=null }) => {
    return(
        <TouchableHighlight underlayColor={ styles.$uderlaycolor } onPress={ onPress }>
            <View style={ styles.row }>
                <Text style={ styles.text } >{ text }</Text>
                { selected ? <Icon checkmark={checkmark} visible={visible}/> : <Icon /> }
                {customIcon}
            </View>
        </TouchableHighlight>
    );
};

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
};

export default ListItem;