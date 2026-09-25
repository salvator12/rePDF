import { StyleSheet } from "react-native";
import { colors } from '../../../constants/colors';
import { typography } from "@/constants/typography";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 22,
        alignItems: 'center',
        backgroundColor: colors.surface,
        justifyContent: 'space-between'
    },
    
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.text
    },

    spacer: {
        flex: 1
    },
    
     icons: {
        color: colors.textSecondary,
    },

    pressed: {
        color: colors.text
    }
})