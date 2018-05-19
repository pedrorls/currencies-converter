import EStylesheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';


export default EStylesheet.create({
    $underlayColor: '$borderColor',

    row: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '$white',
    },
    text: {
        fontSize: 16,
        color: '$darkText'
    },
    separator: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '$borderColor',
        flex: 1,
        height: StyleSheet.hairlineWidth,
    },
    icon: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible:{
        backgroundColor: '$primaryBlue',
    },
    checkIcon: {
        width: 15,
    }
});