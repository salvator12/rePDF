import { Pressable,Text } from 'react-native'
import { styles } from './CardButton.styles'

interface CardButtonProps {
  title?: string,
  onButtonPress: () => void,
  isValid?: boolean;
}
export default function CardButton({
  title,
  onButtonPress,
  isValid
}: CardButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        !isValid && styles.disabled,
        pressed && styles.pressed,
      ]}
      onPress={onButtonPress}
      disabled={!isValid}
    >
      {title && <Text style={styles.title} numberOfLines={1}>
      {title}
      </Text>}
    </Pressable>
  )
}