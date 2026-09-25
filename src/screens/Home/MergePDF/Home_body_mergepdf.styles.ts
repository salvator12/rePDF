import { StyleSheet } from "react-native";
import { colors } from '../../../constants/colors';
import { Spacing } from "@/constants/theme";
import { typography } from "@/constants/typography";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        flexDirection: 'column'
    },
    title: {
        fontSize: typography.screenTitle,
        fontWeight: 'bold',
        color: colors.text
    },

    subtitle: {
        marginTop: 8,
        fontSize: typography.subtitles,
        color: colors.textSecondary,
        marginBottom: 40
    }
})