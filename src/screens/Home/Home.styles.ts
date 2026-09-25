import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors';
import { Spacing } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
      width: '100%',
      backgroundColor: colors.text
  },

  body: {
    height: '100%',
    paddingHorizontal: 24,
    backgroundColor: colors.background
  },

  group: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  largeSpacing: {
    gap: 40
  },

  midSpacing: {
    gap: 20
  },

  lowSpacing: {
    gap: 10
  },

  title: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.primary,
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
