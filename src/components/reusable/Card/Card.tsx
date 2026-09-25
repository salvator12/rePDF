import { ImageSourcePropType, Image, View, Text } from 'react-native'
import { styles } from './Card.styles';
import CardButton from '../Button/CardButton/CardButton'

interface CardProps {
    title?: string;
    description?: string;    
    image?: ImageSourcePropType;
    onButtonPress: () => Promise<void>;
}

export default function Card({
    title,
    description,
    image,
    onButtonPress
}: CardProps) {
  return (
    <View style={styles.container}>
        {image && (
            <Image
                source={image}
                style={styles.logo}
                resizeMode="contain"
            />
        )}
        {title && <Text style={styles.title}>{title}</Text>}

        {description && (
            <Text style={styles.description}>
                {description}
            </Text>
        )}
        <CardButton 
            title="Select Files"
            isValid={true}
            onButtonPress={onButtonPress}
        />
        
    </View>
  )
}