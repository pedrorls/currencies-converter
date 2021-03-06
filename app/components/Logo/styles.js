import { Dimensions } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';

const imageWidth =  Dimensions.get('window').width / 2;
const imageHeight = Dimensions.get('window').height / 2;

export default EStylesheet.create({

    $largeContainerWidthSize: imageWidth,
    $largeContainerHeighthSize: imageHeight,
    $smallContainerWidthSize: imageWidth / 2,
    $smallContainerHeightSize: imageHeight / 2,

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage: {
        width: '$largeContainerWidthSize',
        height: '$largeContainerHeighthSize',
    },
    textLogo:{
        color: '$white',
        fontSize: 26,
        fontWeight: '600',
        letterSpacing: -0.5,
        marginTop: 5,
        marginBottom: 5,
    }
});