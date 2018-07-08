import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';

const styles = {

    rootContainer:
    {
        padding: metrics.padding,
    },
    cardContainer:
    {
        shadowOffset: { width: 1, height: 1},
        shadowColor: colors.primary,
        marginVertical: 5,
        marginHorizontal: 5,
        maxHeight: 250,
        backgroundColor: colors.secondary,
        borderWidth: 1,
        borderColor: 'rgba(216, 49, 91, 0.1)',
    },
    postContainer:
    {
        margin: metrics.padding,
        marginBottom: 0,
    },
    tagsContainer:
    {
        flexDirection: 'row',
        padding: metrics.padding,
        paddingBottom: 10,
        marginTop: 5,
        alignItems: 'center',
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

};

export default styles;