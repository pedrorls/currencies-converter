import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
    constructor(props){
        super(props);
        this.containerImageWidth = new Animated.Value(styles.$largeContainerWidthSize);
        this.containerImageHeight = new Animated.Value(styles.$largeContainerHeighthSize);
    }

    componentDidMount(){
        let keyboardShow = 'keyboardWillShow';
        let keyboardHide = 'keyboardWillHide';   
        if(Platform.OS === 'android'){
            keyboardShow = 'keyboardDidShow';
            keyboardHide = 'keyboardDidHide';
        };
        this.keyboardDidShowListener = Keyboard.addListener(keyboardShow, this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener(keyboardHide, this._keyboardDidHide);
    }

    componentWillUnmount(){
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        Animated.parallel([
            Animated.timing(this.containerImageWidth, { 
                    toValue: styles.$smallContainerWidthSize,
                    duration: ANIMATION_DURATION
            }),

            Animated.timing(this.containerImageHeight, { 
                    toValue: styles.$smallContainerHeightSize,
                    duration: ANIMATION_DURATION
            }),
        ]).start();
    };

    _keyboardDidHide = () => {
        Animated.parallel([
            Animated.timing(this.containerImageWidth, { 
                    toValue: 202,
                    duration: ANIMATION_DURATION
            }),

            Animated.timing(this.containerImageHeight, { 
                    toValue: 302, 
                    duration: ANIMATION_DURATION 
            })
        ]).start();
    };


    render(){
        const containerImageStyle = [
            styles.containerImage,
            { width: this.containerImageWidth, height: this.containerImageHeight }
        ];

        return(
            <View style={ styles.container }>
                <Animated.Image resizeMode='contain' style={ containerImageStyle } source={ require('./images/logo.png') } />
                <Text style={ styles.textLogo }>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;