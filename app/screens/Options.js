import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking, Alert } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';


const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

export default class Options extends Component {

    static propTypes = {
        navigation: PropTypes.object,
    };

    navigateTo(screenName, data=null){
        this.props.navigation.navigate(screenName, data);
    }

    onThemesPress = () => {
        this.navigateTo('Themes');
    };

    onSitePress = () => {
        Linking.openURL('httpsss://fixer.io')
        .catch(
            () => Alert.alert('Link Error', 'Please try later or contact the developer.')
        );
    };

    render(){
        let arrowIcon = 'ios-arrow-forward';
        let linkIcon = 'ios-link';
        if(Platform.OS === 'android'){
            arrowIcon = 'md-arrow-forward';
            linkIcon = 'md-link';
        }
        return(
            <ScrollView>
                <StatusBar translucent={false} barStyle='default' />
                <ListItem
                    text='Themes'
                    onPress={ this.onThemesPress }
                    customIcon={
                        <Ionicons 
                            name= {`${ICON_PREFIX}-arrow-forward`}
                            color={ICON_COLOR}
                            size={ICON_SIZE}
                        />
                    }
                />
                <Separator/>
                <ListItem
                    text='Fixer.io'
                    onPress={ this.onSitePress }
                    customIcon={
                        <Ionicons 
                            name= {`${ICON_PREFIX}-link`}
                            color={ICON_COLOR}
                            size={ICON_SIZE}
                        />
                    }
                />
                <Separator/>
            </ScrollView>
        );
    }
}