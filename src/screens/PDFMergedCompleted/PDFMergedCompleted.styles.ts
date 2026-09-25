import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors';
import { Colors, Spacing } from "@/constants/theme";
import { typography } from "@/constants/typography";

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        alignItems:'center',
        backgroundColor: colors.white
    },

    navbarContainer: {
        marginTop: 22,
    },

    navbarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text
    },

    bodyContainer: {
        marginTop: 60,
        flex: 1,
        alignItems:'center',
        paddingHorizontal: 32,
    },

    title: {
        fontSize: 24,
        marginTop: 48,
        fontWeight: 'bold',
        color: colors.text
    },

    subtitle: {
        marginTop: 8,
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: 40
    },

    Spacing: {
        height: 40
    },

    groupButton: {
        marginTop: 16,
        flexDirection: 'row',
    },

    outlineBtn: {
        flex: 1,
        height: 48,
        borderRadius: 16,
        gap: 8,
        borderWidth: 1,
        borderColor: '#EFEFF4',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    outlineBtnText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: '600'
    },

    textBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto'
    },

    textBtnLabel: {
        color: colors.textSecondary,
        fontSize: 14,
        fontWeight: '600'
    }
})