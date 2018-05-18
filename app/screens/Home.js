import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';


const TEMP_BASE_CURRENCY = 'BRL';
const TEMP_QUOTE_CURRENCY = 'USD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '27.124';
const TEMP_CONVERSION_RATE = 0.27124;
const TEMP_CONVERSION_DATE = new Date();

export default class Home extends Component{

    onPressBaseCurrency = () => {
        console.log('Base currency pressed');
    };

    onPressQuoteCurrency = () => {
        console.log('Quote currency pressed');
    };

    onTextChange = (text) => {
        console.log('change text', text);
    };

    swapCurrencies = () => {
        console.log('Currencies swapped');
    };

    configPress = () => {
        console.log('Config was pressed');
    };

    render(){
        return (
            <Container>
                <StatusBar
                    translucent={false}
                    barStyle="light-content"
                />
                <Header onPress={this.configPress} />
                <KeyboardAvoidingView behavior='padding'>
                    <Logo/>
                    <InputWithButton
                        buttonText={TEMP_BASE_CURRENCY}
                        onPress={this.onPressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType='numeric'
                        onChangeText={this.onTextChange}

                    />
                    <InputWithButton
                        buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={this.onPressQuoteCurrency}
                        editable={false}
                        defaultValue={TEMP_QUOTE_PRICE}
                        keyboardType='numeric'
                    />
                </KeyboardAvoidingView>
                <LastConverted
                    base={TEMP_BASE_CURRENCY}
                    quote={TEMP_QUOTE_CURRENCY}
                    conversionRate={TEMP_CONVERSION_RATE}
                    date={TEMP_CONVERSION_DATE}
                />

                <ClearButton
                    text='Reverse Currencies'
                    onPress={this.swapCurrencies}
                />
            </Container>
        )
    }
}