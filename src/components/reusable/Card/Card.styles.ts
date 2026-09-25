import { StyleSheet, Text, View } from 'react-native'
import { colors } from '@/constants/colors'
import { typography } from '@/constants/typography';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 32,
        borderRadius: 24,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: typography.cardheadings,
        fontWeight: '600',
        color: colors.text,
        marginTop: 24,
        marginBottom: 8
    },

    description: {
        fontSize: typography.subtitles,
        color: colors.textSecondary,
        marginBottom: 32,
        textAlign: 'center',
        paddingHorizontal: 40
    },

    logo: {
        width: 80,
        height: 80
    }

}) 