import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';
const styles = StyleSheet.create({

    cardContainer:
    {
        shadowOffset: { width: 1, height: 1},
        shadowColor: colors.primary,
        marginVertical: 5,
        marginHorizontal: 5,
        height: 200,
        backgroundColor: colors.secondary,
        borderWidth: 1,
        borderColor: 'rgba(216, 49, 91, 0.1)',
    },
    titleContainer:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        shadowOffset: { width: 0, height: 1},
        shadowColor: colors.primary,
    },
    title:
    {
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        color: colors.third,
        fontWeight: 'bold'
    },
    postContainer:
    {
        flex: 1,
        margin: metrics.padding,
    },
    postText:
    {
        textAlign: 'center',
        fontFamily: fonts.family,
    },
    tagsContainer:
    {
        flexDirection: 'row',
        padding: metrics.padding,
        paddingBottom: 10,
        marginTop: 5,
        alignItems: 'center',
    },
    separador:
    {
        height: 2,
        backgroundColor: colors.back,
    },
    icon:
    {
        fontSize: 15,
        color: colors.third,
    },
    tagText:
    {
        color: colors.third,
        fontFamily: fonts.family,
        marginHorizontal: 5,
    },



});

export default styles;