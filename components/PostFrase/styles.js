import { StyleSheet } from 'react-native';
import { fonts, colors, metrics, general } from '../../styles';

const styles = StyleSheet.create({
    ...general,
    titleContainer:
    {
        padding: 10,
        alignItems: 'center',
    },
    title:
    {
        textAlign: 'left',
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        color: colors.third,
        fontWeight: 'bold'
    },
    frase:
    {
        textAlign: 'justify',
        fontFamily: fonts.family,
        fontSize: fonts.title,
    },
    autor:
    {
        textAlign: 'right',
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        fontStyle: 'italic',
        marginTop: 10,
        marginBottom: 0,
    },
});

export default styles;