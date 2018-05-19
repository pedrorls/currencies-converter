import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import { Home, CurrencyList } from '../screens';

export default StackNavigator({
    Home: {
        screen: Home,
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