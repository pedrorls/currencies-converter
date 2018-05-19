import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { Ionicons } from '@expo/vector-icons';


const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

export default class Options extends Component {
    onThemesPress = () => {
        console.log('Themes pressed');
    };

    onSitePress = () => {
        console.log('Site pressed')
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