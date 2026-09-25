import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './SubHeader.styles';
import { router } from 'expo-router';

export default function SubHeader({title} : {title: string}) {
  return (
    <View style={styles.container}>
        <Pressable 
            onPress={() => router.back()}
        > 
            {({ pressed }) => (
                <Ionicons
                    name="arrow-back"
                    size={24}
                    style={[
                        styles.icons,
                        pressed && styles.pressed
                    ]}
                />
            )}
        </Pressable>
        <View style={styles.spacer}></View>
        <Text 
            style={styles.title}
            numberOfLines={1}
            ellipsizeMode="tail"
        >
            {title}
        </Text>
        <View style={styles.spacer}></View>
    </View>
  )
}