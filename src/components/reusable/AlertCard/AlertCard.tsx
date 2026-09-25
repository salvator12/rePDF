import { View, Text, ImageSourcePropType, Image } from 'react-native'
import { styles } from './AlertCard.styles'
import CardButton from '../Button/CardButton/CardButton'
import { usePDFStore } from '@/store/PDFStore'

interface AlertCardProps {
    title: string,
    subTitle: string,
    additionalInfo?: string | null,
    errorImage: ImageSourcePropType,
}

export default function AlertCard({
    title,
    subTitle,
    additionalInfo,
    errorImage
} : AlertCardProps) {
  const clearAlertProps = usePDFStore((state) => state.clearAlertProps)
  return (
    <View style={styles.container}>
        <View style={styles.alertContainer}>
            {errorImage && (
                <Image
                    source={errorImage}
                    style= {{ marginBottom: 24 }}
                    resizeMode='contain'
                />
            )}
            {title && (
                <Text style={styles.title}>{title}</Text>
            )}
            {subTitle && (
                <Text style={styles.subTitle}>{subTitle}</Text>
            )}
            <View style={styles.sizePDFContainer}>
                {additionalInfo && (
                    <Text style={styles.additionalInfo}>{additionalInfo}</Text>
                )}
            </View>
            <CardButton 
                title="Got it"
                isValid={true}
                onButtonPress={clearAlertProps}
            />
        </View>
    </View>
  )
}