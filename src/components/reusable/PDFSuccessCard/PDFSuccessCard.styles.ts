import { StyleSheet, Text, View } from 'react-native'
import { colors } from '@/constants/colors'
import { typography } from '@/constants/typography';

export const styles = StyleSheet.create({
    imageWrapper: {
        width: 96,
        height: 128,

        shadowColor: '#E0E7FF',
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 1,
        shadowRadius: 8,

        elevation: 20,
    },

    image: {
        width: 96,
        height: 128
    },

    checkBadge: {
        position: 'absolute',
        bottom: -6,
        right: -6,
        width: 40,
        height: 40,
        borderRadius: 32,
        backgroundColor: '#20C997',
        borderWidth: 3,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
})