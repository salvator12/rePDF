import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    safeArea: {
      width: '100%',
      backgroundColor: colors.text
    },

    marginTop: {
        marginTop: 32
    },

    body: {
        height: '100%',
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: colors.background
    },

    bodyTtile: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text
    },

    bodySubTitle: {
        fontSize: 14,
        color: colors.textSecondary,
    },

    groupSubTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    buttonFile: {
        color: colors.primary,
        fontWeight: '600',
        fontSize: 14
    },

    buttonFilePressed: {
        color: colors.darkPrimary,
        fontWeight: '600',
        fontSize: 14
    },

    CardContainer: {
        marginTop: 24,
        gap: 12,
        padding: 5
    },

    ListCardContainer: {
        maxHeight: 250
    },

    ErrorContainer: {
        marginTop: 12,
        gap: 10
    },
    
    footer: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 16,

        borderTopWidth: 1,
        borderTopColor: colors.border,
        marginTop: 'auto',
        backgroundColor: colors.background,
    },


})
