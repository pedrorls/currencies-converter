import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

class Home extends Component{
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        lastConvertedDate: PropTypes.object,
    }

    navigateTo(screenName, data=null){
        this.props.navigation.navigate(screenName, data);
    }

    onPressBaseCurrency = () => {
        this.navigateTo('CurrencyList', { title: 'Base Currency' });
    };

    onPressQuoteCurrency = () => {
        this.navigateTo('CurrencyList', { title: 'Quote Currency' });
    };

    onTextChange = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount));
    };

    swapCurrencies = () => {
        this.props.dispatch(swapCurrency());
    };

    configPress = () => {
        this.navigateTo('Options');
    };

    render(){
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
        if(this.props.isFetching){
            quotePrice = '...';
        }
        return (
            <Container>
                <StatusBar
                    translucent={false}
                    barStyle="light-content"
                />
                <Header onPress={this.configPress} />
                <Logo/>
                <KeyboardAvoidingView behavior='padding'>
                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.onPressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType='numeric'
                        onChangeText={this.onTextChange}

                    />
                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        onPress={this.onPressQuoteCurrency}
                        editable={false}
                        defaultValue={quotePrice}
                        keyboardType='numeric'
                    />
                
                    <LastConverted
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        conversionRate={this.props.conversionRate}
                        date={this.props.lastConvertedDate}
                    />
                </KeyboardAvoidingView>

                <ClearButton
                    text='Reverse Currencies'
                    onPress={this.swapCurrencies}
                />
            </Container>
        )
    }
}

const matStateToProps  = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates|| {};
    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    }
}

export default connect(matStateToProps)(Home);