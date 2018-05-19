import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import {
    Home,
    CurrencyList,
    Options,
    Themes
} from '../screens';

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }

    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options',
        }
    },
    Themes: {
        screen: Themes,
        navigationOptions: {
            headerTitle: 'Available Themes',
        }
    }
},{
    headerMode: 'screen',
});

export default StackNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            header: () => null
        }
    },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    }
}, {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
});