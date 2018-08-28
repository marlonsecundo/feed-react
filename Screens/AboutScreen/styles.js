import { StyleSheet } from 'react-native';
import { general, colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: colors.back,
        padding: metrics.padding,
        alignItems: 'center',
    },
    backButton:
    {
        alignSelf: 'flex-start',
    },
    icon:
    {
        ...general.icon,
        fontSize: 30,
        padding: 10,
    },
    desenv:
    {
        fontSize: fonts.title,
        paddingTop: metrics.padding,
        fontFamily: fonts.family,

    },
    imageContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image:
    {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
    },
    name:
    {
        padding: 10,
        fontFamily: fonts.family,
    },
    versionContainer:
    {
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    version:
    {
        color: colors.primary,
        padding: metrics.padding,
        fontStyle: 'italic',
        fontFamily: fonts.family,
    

    },

});

export default styles;