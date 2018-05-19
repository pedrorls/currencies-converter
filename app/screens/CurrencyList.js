import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

TEMP_CURRENCY = 'BRL'

export default class CurrencyList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }

    onRowPress = () => {
        this.props.navigation.goBack(null);
    }

    render(){
        return(
            <View style={{ flex: 1 }}>
                <StatusBar
                    barStyle='default'
                    translucent={ false }
                />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem 
                            text={ item }
                            selected={item === TEMP_CURRENCY}
                            onPress={this.onRowPress}
                        />
                    )}
                    keyExtractor={(item) => item }
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }}