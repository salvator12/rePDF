import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/colors'
import { typography } from '@/constants/typography';

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: 16,
        minWidth: '100%'
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.white,
    },

    disabled: {
        backgroundColor: '#CCCCCC',
    },

    pressed: {
        backgroundColor: colors.darkPrimary
    }
})
