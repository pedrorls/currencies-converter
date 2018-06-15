import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';


class CurrencyList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        primaryColor: PropTypes.string
    }

    onRowPress = (currency) => {
        const { type } = this.props.navigation.state.params;
        if(type === 'base'){
            this.props.dispatch(changeBaseCurrency(currency));
        }else if(type === 'quote'){
            this.props.dispatch(changeQuoteCurrency(currency));
        }
        this.props.navigation.goBack(null);
    }

    render(){
        let comparisonCurency = this.props.baseCurrency;
        if(this.props.navigation.state.params.type === 'quote'){
            comparisonCurency = this.props.quoteCurrency;
        }
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
                            selected={item === comparisonCurency}
                            onPress={() => this.onRowPress(item)}
                            iconBackgroundColor={this.props.primaryColor}
                        />
                    )}
                    keyExtractor={(item) => item }
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        baseCurrency: state.currencies.baseCurrency,
        quoteCurrency: state.currencies.quoteCurrency,
        primaryColor: state.theme.primaryColor,
    }
}

export default connect(mapStateToProps)(CurrencyList);