import { ImageSourcePropType, Image, View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from './InfoCard.styles'
import { colors } from '@/constants/colors'

interface InfoCardProps {
    InfoCardImage: ImageSourcePropType,
    description: string
}

export default function InfoCard({
    InfoCardImage,
    description
}: InfoCardProps) {
  return (
    <View style={styles.container}> 
        <Image
            source={InfoCardImage}
            resizeMode='contain'
            style={styles.infoIcon}
        />
        <Text
            style={styles.description}
        >
            {description}
        </Text>
    </View>
  )
}