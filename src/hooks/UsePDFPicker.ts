import { pickPDFs } from "@/services/DocumentPicker";
import { formatPDFSize } from "@/services/formatPDFSize";
import { PDFPageCount } from "@/services/PDFPageCount";
import { validatePDFSize, validateQtyPDFFile } from "@/services/ValidatePDF";
import { usePDFStore } from "@/store/PDFStore";
import { DocumentPickerAsset } from "expo-document-picker";

export function usePDFPicker() {
    const setSelectedFiles = usePDFStore(
        (state) => state.setSelectedFiles
    );

    const setTotalSizeFiles = usePDFStore(
        (state) => state.setTotalSizeFiles
    );

    const selectedPDFsStore = usePDFStore(
        (state) => state.selectedFiles
    )
    const handleValidation = (files: DocumentPickerAsset[]) => {
        const validationQtyPDF = validateQtyPDFFile(files)
        if(!validationQtyPDF.isValid) {
            return {
                files: null,
                totalSize: null,
                errorType: 'Not Enough Files',
                error: validationQtyPDF.error
            }
        }

        const validationPDF = validatePDFSize(files)

        if(!validationPDF.isValid) {
            return {
                files: null,
                totalSize: validationPDF.totalSize,
                errorType: 'File Size Limit',
                error: validationPDF.error
            }
        }

        return {
            files: files,
            errorType: '',
            totalSize: validationPDF.totalSize,
            error: null
        }
    }

    const handleAjustmentData = async (files: DocumentPickerAsset[]) => {
        const addingConvertiSizePDF = formatPDFSize(files)
        const finalFiles = await PDFPageCount(addingConvertiSizePDF);
        
        return finalFiles
    }

    const selectPDFs = async () => {
        const files = await pickPDFs()

        if(!files) {
            return {
                files: null,
                error: null
            }
        }

        const validationPDF = handleValidation(files)
        if(!validationPDF.files) {
            return {
                files: null,
                error: { 
                    type: validationPDF.errorType,
                    totalSize: validationPDF.totalSize,
                    message: validationPDF.error 
                },
            };
        }
        const finalFiles = await handleAjustmentData(files)
        
        // const finalFiles = 
        setSelectedFiles(finalFiles, validationPDF.totalSize);
        return {
            files: files,
            error: null
        }
    }

    const addPDFs = async (selectedFiles: DocumentPickerAsset[], currentQtyStatus: boolean, currentTotalSizeStatus: boolean) => {
        const files = await pickPDFs()

        if(!files) {
            return {
                files: null
            }
        }

        const concatFiles = [
            ...selectedFiles,
            ...files
        ]

        const validationQtyPDF = validateQtyPDFFile(concatFiles)

        const validationSizePDF = validatePDFSize(concatFiles)
        
        const finalFiles = await handleAjustmentData(concatFiles)

        setSelectedFiles(finalFiles, validationSizePDF.totalSize);
         return {
            files: finalFiles,
            isTotalSizeValid: validationSizePDF.isValid,
            isQtyValid: validationQtyPDF.isValid,
            errorMessageTotalSize: validationSizePDF.error,
            errorMessageQty: validationQtyPDF.error
        }
    }

    const reValidationPDFs = (finalRemainingFiles: DocumentPickerAsset[]) => {
        const validationQtyPDF = validateQtyPDFFile(finalRemainingFiles)
        const validationSizePDF = validatePDFSize(finalRemainingFiles)
        setTotalSizeFiles(validationSizePDF.totalSize);
        return {
            isTotalSizeValid: validationSizePDF.isValid,
            isQtyValid: validationQtyPDF.isValid,
            errorMessageTotalSize: validationSizePDF.error,
            errorMessageQty: validationQtyPDF.error
        }
    }
    return {selectPDFs, reValidationPDFs, addPDFs}
}