import { colors } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.white
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 74
    },

    pdfContainer: {
        width: 250,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80
    },

    loadingDots: {
        flexDirection: 'row',
        gap: 8
    },

    dot: {
        backgroundColor: colors.primary,
        width: 10,
        height: 10,
        borderRadius: 5
    },

    pdfImage: {
        width: 96,
        height: 128,
        position: 'absolute',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        marginBottom: 16
    },

    description: {
        fontSize: 16,
        color: colors.textSecondary,
        textAlign: 'center',
        marginBottom: 48
    },

})