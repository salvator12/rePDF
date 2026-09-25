import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './PDFMergeLoading.styles';
import Animated from 'react-native-reanimated';
import { UsePDFMergeLoadingAnimation } from '../../hooks/UsePDFMergeLoadingAnimation';

const PDFIcon = require('../../../assets/images/comp-pdf-toAnimate.png');

export default function PDFMergeLoading() {
  const {leftAnimatedStyle, rightAnimatedStyle, topAnimatedStyle, mergedPdfStyle, dot1Style, dot2Style, dot3Style } = UsePDFMergeLoadingAnimation()
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            
            <View style={styles.pdfContainer}>
                <Animated.Image
                    source={PDFIcon}
                    style={[
                        styles.pdfImage,
                        leftAnimatedStyle
                    ]}
                    resizeMode="contain"
                />

                <Animated.Image
                    source={PDFIcon}
                    style={[
                        styles.pdfImage,
                        rightAnimatedStyle
                    ]}
                    resizeMode="contain"
                />

                <Animated.Image
                    source={PDFIcon}
                    style={[
                        styles.pdfImage,
                        topAnimatedStyle
                    ]}
                    resizeMode="contain"
                />

                <Animated.Image
                    source={PDFIcon}
                    style={[
                        styles.pdfImage,
                        mergedPdfStyle,
                    ]}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.title}>
                Merging your PDFs
            </Text>

            <Text style={styles.description}>
                Please wait while we combine your files.
            </Text>

            <View style={styles.loadingDots}>
                <Animated.View
                    style={[
                        styles.dot,
                        dot1Style
                    ]}
                />
                <Animated.View
                    style={[
                        styles.dot,
                        dot2Style
                    ]}
                />
                <Animated.View
                    style={[
                        styles.dot,
                        dot3Style
                    ]}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}