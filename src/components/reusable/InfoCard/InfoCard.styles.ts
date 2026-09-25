import { StyleSheet, Text, View } from 'react-native'
import { colors } from '@/constants/colors'
import { typography } from '@/constants/typography';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        width: '100%',
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: colors.cardInfo,
        borderColor: colors.errorColor,
        borderWidth: 1,
        gap: 12
    },

    infoIcon: {
        width: 16,
        height: 16,
        tintColor: colors.errorColor
    },

    description: {
        fontSize: 12,
        color: colors.errorColor
    }
})