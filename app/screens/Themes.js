import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

class Themes extends Component{

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
    };


    onThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack();
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

export default connect()(Themes)