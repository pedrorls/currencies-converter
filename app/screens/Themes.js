import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

export default class Themes extends Component{

    onThemePress = (color) => {
        console.log(`Color ${color} pressed`);
    };

    render(){
        return(
            <ScrollView>
                <StatusBar translucent={false} barStyle='default'/>
                <ListItem 
                    text='Blue'
                    onPress={() => this.onThemePress(styles.$blue)}
                    selected={true}
                    checkmark={false}
                    iconBackgroundColor={styles.$blue}
                />
                <Separator/>
                <ListItem 
                    text='Orange'
                    onPress={() => this.onThemePress(styles.$orange)}
                    selected={true}
                    checkmark={false}
                    iconBackgroundColor={styles.$orange}
                />
                <Separator/>
                <ListItem 
                    text='Green'
                    onPress={() => this.onThemePress(styles.$green)}
                    selected={true}
                    checkmark={false}
                    iconBackgroundColor={styles.$green}
                />
                <Separator/>
                <ListItem 
                    text='Purple'
                    onPress={() => this.onThemePress(styles.$purple)}
                    selected={true}
                    checkmark={false}
                    iconBackgroundColor={styles.$purple}
                />
                <Separator/>
            </ScrollView>
        );
    }
}