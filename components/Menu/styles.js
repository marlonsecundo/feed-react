import { StyleSheet } from 'react-native';
import { metrics, fonts, colors, general } from '../../styles';

const styles = StyleSheet.create({

    ...general,
    container:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rootContainer:
    {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: colors.secondary,

    }

});

export default styles;