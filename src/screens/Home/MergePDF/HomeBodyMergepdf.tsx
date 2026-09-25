import { View, Text, Alert } from 'react-native'
import { useState } from 'react'
import { styles } from './Home_body_mergepdf.styles'
import Card from '@/components/reusable/Card/Card'
import { router } from 'expo-router'
import { usePDFPicker } from '@/hooks/UsePDFPicker'
import AlertCard from '@/components/reusable/AlertCard/AlertCard'
import { usePDFStore } from '@/store/PDFStore';

export default function HomeBodyMergepdf() {

  const { selectPDFs }= usePDFPicker()
  const setAlertProps = usePDFStore((state) => state.setAlertProps)

  const handleSelectFiles = async () => {
    const {files, error} = await selectPDFs()

    if (error) {
      setAlertProps(error.type, error.totalSize ?? 0, error.message ?? '')
      return;
    }

    if (!files) return
    // nanti bisa setState(files)
    nextPage()
  };

  const nextPage = () => {
      router.push('/AppNavigator/SelectedFilesRoute')
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Merge PDF</Text>
      <Text style={styles.subtitle}>Combine multiple PDF files into one document.</Text>
      <Card 
        title='Select PDF Files'
        image={require('../../../../assets/images/icon-upload-file.png')}
         description="Choose two or more PDF files to merge"
         onButtonPress={handleSelectFiles}
      />
    </View>
  )
}