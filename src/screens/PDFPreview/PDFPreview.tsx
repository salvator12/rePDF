
import { useLocalSearchParams, router } from 'expo-router';
import { PdfView } from '@kishannareshpal/expo-pdf';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './PDFPreview.styles';
import SubHeader from '@/components/reusable/SubHeader/SubHeader';


export default function PDFPreview() {
    const {
        uri,
        name
    } = useLocalSearchParams();

    return (
        <SafeAreaView edges={['top', 'bottom']} style={[styles.safeArea, styles.container]}>
            <SubHeader
                title={name as string}
            />
            <PdfView
                style={{ flex: 1 }}
                uri={uri as string}
            />
        </SafeAreaView>
    )
}