import {  StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';
const styles = StyleSheet.create(
    {
        container:
        {
            padding: metrics.padding,
            flexDirection: 'row',
            backgroundColor: colors.secondary,
        },
        contTitle:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title:
        {
            fontSize: fonts.logo,
            color: colors.primary,
            fontFamily: fonts.family,
        },
        about:
        {
            fontFamily: fonts.family,
            fontSize: fonts.logo,
            color:colors.primary,
            marginHorizontal: 10,
        },
    }
);

export default styles;