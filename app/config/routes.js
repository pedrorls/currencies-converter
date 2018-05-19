import { StackNavigator } from 'react-navigation';
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
    }
});