import { View, Text, Pressable, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './SelectedFiles.styles';
import SubHeader from '@/components/reusable/SubHeader/SubHeader';
import { usePDFStore } from '@/store/PDFStore';
import DragCard from '@/components/reusable/DragCard/DragCard';
import InfoCard from '@/components/reusable/InfoCard/InfoCard';
import { usePDFPicker } from '@/hooks/UsePDFPicker';
import { router } from 'expo-router';
import DraggableFlatList, { ScaleDecorator, } from 'react-native-draggable-flatlist';
import CardButton from '@/components/reusable/Button/CardButton/CardButton';
import { useState } from 'react';


export default function SelectedFiles() {
  const files = usePDFStore((state) => state.selectedFiles)
  const totalSize = usePDFStore((state) => state.totalSizeFiles)
  const removeSelectedFiles = usePDFStore((state) => state.removeSelectedFiles)
  const reorderSelectedFiles = usePDFStore((state) => state.reorderSelectedFiles)
  const [qtyResultChecked, setQtyResultChecked] = useState(true);
  const [sizeResultChecked, setSizeResultChecked] = useState(true);
  const [errorMessageQty, setErrorMessageQty] = useState('');
  const [errorMessageTotalSize, setErrorMessageTotalSize] = useState('');

  const { reValidationPDFs, addPDFs }= usePDFPicker()

  const handleDeleteFile = (pdfName: string, idDelete: string ) => {
        Alert.alert(
            'Delete PDF',
            `Are you sure you want to delete "${pdfName}"`,
            [
                {
                    text: 'No',
                    style: 'cancel'
                },
                {
                    text: 'Confirm',
                    style: 'destructive',
                    onPress: () => {
                        
                        let remainingFiles = files.filter(
                            (selectedPdf) => selectedPdf.id !== idDelete
                        );
                        console.log(`remainingFiles: ${remainingFiles.length}`)
                        let finalRemainingFiles = remainingFiles.map(
                           (selectedPdf) => selectedPdf.pdf.file
                        )
                        console.log(finalRemainingFiles)
                        const resultChecked = reValidationPDFs(finalRemainingFiles)
                        removeSelectedFiles(idDelete);
                        setQtyResultChecked(resultChecked.isQtyValid)
                        setSizeResultChecked(resultChecked.isTotalSizeValid)
                        setErrorMessageTotalSize(resultChecked.errorMessageTotalSize ?? '')
                        setErrorMessageQty(resultChecked.errorMessageQty ?? '')
                    }
                }
            ]
        )
  }
  return (
    <SafeAreaView edges={['top', 'bottom']} style={[styles.safeArea, styles.container]}>
        <SubHeader
            title='Selected Files'
        />
        
        <View style={styles.body}>

            <Text style={[styles.bodyTtile, styles.marginTop]}>
                Selected Files
            </Text>

            <View style={styles.groupSubTitle}>
                <Text style={styles.bodySubTitle}>
                    {files.length} files selected ({totalSize.toFixed(2)} MB / 20 MB)
                </Text>
                <Pressable
                    onPress={async () => {
                        let selectedFiles = files.map(
                           (selectedPdf) => selectedPdf.pdf.file
                        )
                        const result = await addPDFs(selectedFiles, qtyResultChecked, sizeResultChecked)
                        if (!result.files) return
                        setQtyResultChecked(result.isQtyValid ?? true)
                        setSizeResultChecked(result.isTotalSizeValid ?? true)
                        setErrorMessageTotalSize(result.errorMessageTotalSize ?? '')
                        setErrorMessageQty(result.errorMessageQty ?? '')
                    }}
                >
                    {({ pressed }) => (
                        <Text style={[
                            styles.buttonFile,
                            pressed && styles.buttonFilePressed
                        ]}>
                            + Add Files
                        </Text>
                    )}
                </Pressable>
            </View>
            <View style={styles.ErrorContainer}>
                {!qtyResultChecked && (
                    <InfoCard
                        InfoCardImage={require('../../../assets/images/icon-info.png')}
                        description={errorMessageQty}
                    />
                )}
                {!sizeResultChecked && (
                    <InfoCard
                        InfoCardImage={require('../../../assets/images/icon-info.png')}
                        description={errorMessageTotalSize}
                    />
                )}
            </View>
            <View style={styles.ListCardContainer}>
                <DraggableFlatList
                    data={files}
                    keyExtractor={(item) => 
                        item.id
                    }
                    contentContainerStyle={styles.CardContainer}
                    renderItem={({
                        item,
                        drag,
                        isActive
                    }) => (
                        <ScaleDecorator>
                            <DragCard
                                title={item.pdf.file.name}
                                subTitle={`${item.pdf.formatFileSize} · ${item.pageCount} pages`}
                                DragIconImage={require('../../../assets/images/icon-dragCard.png')}
                                LogoImage={require('../../../assets/images/logo-dragCard.png')}
                                onPreviewPress={() => {
                                    router.push({
                                        pathname: '/AppNavigator/PDFPreviewRoute',
                                        params: {
                                            uri: item.pdf.file.uri,
                                            name: item.pdf.file.name,
                                        },
                                    })
                                }}
                                onDeletePress={() => {
                                    handleDeleteFile(item.pdf.file.name, item.id)
                                }}
                                onDrag={drag}
                                isDragging={isActive}
                            />
                        </ScaleDecorator>
                    )}
                    onDragEnd={({data}) => 
                        reorderSelectedFiles(data)
                    }  
                />
            </View>
        </View>
        <View style={styles.footer}>
            <CardButton 
                title="Merge PDF"
                isValid= {qtyResultChecked && sizeResultChecked}
                onButtonPress={() => {
                    router.push('/AppNavigator/MergePDFProcessingRoute')
                }}
            />
        </View>
    </SafeAreaView>
  )
}