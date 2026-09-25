import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/colors'
import { typography } from '@/constants/typography';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'rgba(0, 0, 0, 0.4)',

        zIndex: 100,
        elevation: 100,
        paddingHorizontal: 32,
    },

    alertContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        paddingVertical: 24,
        borderRadius: 32,
        backgroundColor: colors.white,
    },

    sizePDFContainer: {
        width: 122,
        height: 25,
        backgroundColor: '#F9FAFB',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 8,
    },

    subTitle: {
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: 8,
    },

    additionalInfo: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.textSecondary,
        marginBottom: 24,
    },



})