import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { styles } from './PDFMergedCompleted.styles';
import PDFSuccessCard from '@/components/reusable/PDFSuccessCard/PDFSuccessCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import DragCard from '@/components/reusable/DragCard/DragCard';
import CardButton from '@/components/reusable/Button/CardButton/CardButton';
import { MergedPDFResult } from '@/types/MergedPDFResult';
import { router } from 'expo-router';
import { usePDFStore } from '@/store/PDFStore';
import { sharePDF } from '@/services/SharePDF';
import { SavePDF } from '@/services/SavePDF';


interface PDFMergedCompletedProps {
    file: MergedPDFResult
}

// export default function PDFMergedCompleted({visible, onClose}) {
export default function PDFMergedCompleted({file} : PDFMergedCompletedProps) {
  const clearSelectedFiles = usePDFStore((state) => state.clearSelectedFiles)

    const handleSharePDF = async () => {
            try {
                await sharePDF(file.uri)
            } catch (error) {
                console.error(error);
            }
    }
    const handleSavePDF = async () => {
        try {

            const savedUri = await SavePDF(
                file.uri,
                file.name
            );

            if (!savedUri) {
                console.log('User cancelled save');
                return;
            }

            console.log(
                'PDF successfully saved:',
                savedUri
            );

        } catch (error) {

            console.error(
                'Save PDF failed:',
                error
            );
        }
    };
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
        <View style={styles.navbarContainer}>
            <Text style={styles.navbarTitle}>Success</Text>
        </View>
        <View style={styles.bodyContainer}>
            <PDFSuccessCard/>
            <Text style={styles.title}> Your PDF is ready! </Text>
            <Text style={styles.subtitle}>Your files have been successfully merged.</Text>
            <DragCard
                title={file.name}
                subTitle={`${file.totalPages} pages · ${file.size}`}
                DragIconImage={require('../../../assets/images/icon-dragCard.png')}
                LogoImage={require('../../../assets/images/logo-dragCard.png')}
                showDragIcon={false}
            />
            <View style={styles.Spacing}></View>
            <CardButton 
                title="Preview PDF"
                isValid= {true}
                onButtonPress={() => {
                    router.push({
                        pathname: '/AppNavigator/PDFPreviewRoute',
                        params: {
                            uri: file.uri,
                            name: file.name,
                        },
                    })
                }}
            />
            <View style={styles.groupButton}>
                <TouchableOpacity 
                    style={[styles.outlineBtn, {marginRight: 6}]}
                    onPress={handleSavePDF}
                >
                    <Feather name="download" size={18} color="#4A41E8" />
                    <Text style={styles.outlineBtnText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.outlineBtn, {marginLeft: 6}]}
                    onPress={handleSharePDF}
                >
                    <Feather name="share-2" size={18} color="#4A41E8" />
                    <Text style={styles.outlineBtnText}>Share</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.textBtn}
                onPress={() => {
                    clearSelectedFiles()
                    router.dismissAll()
                }}
            >
                <Feather name="rotate-ccw" size={16} color="#8E8E93" />
                <Text style={styles.textBtnLabel}>Start Over</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

function savePDF(uri: string, name: string) {
    throw new Error('Function not implemented.');
}
