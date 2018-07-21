import { StyleSheet } from 'react-native';
import { metrics, colors, fonts,general } from '../../styles';
const styles = StyleSheet.create({
    ...general,
    titleContainer:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
    },
    title:
    {
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        color: colors.third,
        fontWeight: 'bold'
    },
    postText:
    {
        textAlign: 'center',
        fontFamily: fonts.family,
    },
    separador:
    {
        height: 2,
        backgroundColor: colors.back,
    },



});

export default styles;