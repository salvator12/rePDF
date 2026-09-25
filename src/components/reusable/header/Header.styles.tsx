import { StyleSheet } from "react-native";
import { colors } from '../../../constants/colors';
import { typography } from "@/constants/typography";

export const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        backgroundColor: colors.surface,
        paddingHorizontal: 24,
        paddingVertical: 16,
        justifyContent: 'space-between',
    },

    title: {
        fontSize: typography.logoTitle,
        fontWeight: 'bold',
        color: colors.primary
    },

    logo: {
        width: 32,
        height: 32
    },

    helpSettingsIcon: {
        width: 40,
        height: 40
    },

    groupTitleLogo: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },

    groupHelper: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center'
    }
});