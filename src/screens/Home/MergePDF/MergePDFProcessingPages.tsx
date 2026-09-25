import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import PDFMergeLoading from '@/screens/PDFMergeLoading/PDFMergeLoading';
import PDFMergedCompleted from '../../PDFMergedCompleted/PDFMergedCompleted';
import { MergePDF } from '@/services/MergePDF';
import { usePDFStore } from '@/store/PDFStore';
import { MergedPDFResult } from '@/types/MergedPDFResult';


export default function MergePDFProcessingPages() {
  const files = usePDFStore((state) => state.selectedFiles)
  const [isMerging, setIsMerging] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [mergedFile, setMergedFile] = useState<MergedPDFResult | null>(null);


  useEffect(() => {
        handleMerge()
  }, [])
  const handleMerge = async () => {
    try {
      let uriFiles = files.map(selectedPdf => selectedPdf.pdf.file.uri)
      const result = await MergePDF(uriFiles)

      setMergedFile(result)

      // tunggu animasi visual selesai
      await new Promise(resolve =>
          setTimeout(resolve, 500)
      );
      setIsMerging(false);
      setIsCompleted(true);
    } finally {
      setIsMerging(false)
    }
  }
  return (
    <View style={{ flex: 1 }}>
      {isMerging ? (
        <PDFMergeLoading />
      ) : mergedFile ? (
        <PDFMergedCompleted
                file={mergedFile}
            />
      ) : (
        <Text>Failed to merge PDF</Text>
      )}
    </View>
  )
}