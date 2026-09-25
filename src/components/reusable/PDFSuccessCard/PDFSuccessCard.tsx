import { ImageSourcePropType, Image, View, Text } from 'react-native'
import React from 'react'
import { styles } from './PDFSuccessCard.styles'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function PDFSuccessCard() {
  return (
    <View style={styles.imageWrapper}>
        <Image
            source={require('../../../../assets/images/comp-pdf-toAnimate.png')}
            style={styles.image}
            resizeMode="contain"
        />
        <View style={styles.checkBadge}>
            <Feather name="check" size={16} color="#FFFFFF" />
        </View>
    </View>
  )
}