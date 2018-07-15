import { StyleSheet } from 'react-native';
import { colors, general } from '../../styles'
const styles = StyleSheet.create(
    {
        ...general,
        content:
        {
          backgroundColor: colors.back,
          flex: 1,
        },
    }
);

export default styles;