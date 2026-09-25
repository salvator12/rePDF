import { StyleSheet, Text, View } from 'react-native'
import { colors } from '@/constants/colors'
import { typography } from '@/constants/typography';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 24,
        backgroundColor: colors.white,
        alignItems: 'center',
        gap: 16,
        shadowColor: '#000',
        //ios
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        
        // android
        elevation: 4
    },
    Dragbtn: {
        borderRadius: 24
    },

    title: {
        fontSize: 16,
        color: colors.text
    },

    subTitle: {
        fontSize: 12,
        color: colors.textSecondary
    },

    dragIcon: {
        tintColor: colors.textSecondary
    },

    Dragged: {
        tintColor: colors.primary
    },

    logo: {
        width: 40,
        height: 40
    },

    TextContainer: {
        minWidth: 0,
        flex:1
    },

    trashIcon: {
        color: '#FF0000'
    },

    pressed: {
        opacity: 0.5
    },

    
})