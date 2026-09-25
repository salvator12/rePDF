import { DocumentPickerAsset } from "expo-document-picker";

const MAX_TOTAL_SIZE = 20 * 1000 * 1000 //20 MB

export function validatePDFSize(files: DocumentPickerAsset[]) {
    var totalSize = files.reduce(
        (total, file) => total + ((file.size ?? 0)), 0
    );
    console.log(totalSize)
    console.log(MAX_TOTAL_SIZE)
    return {
        isValid: totalSize <= MAX_TOTAL_SIZE,
        totalSize: totalSize / (1000 * 1000),
        maxSize : MAX_TOTAL_SIZE,
        error: totalSize <= MAX_TOTAL_SIZE ? null : 'Total file size cannot exceed 20 MB'
    }
}

export function validateQtyPDFFile(files: DocumentPickerAsset[]) {
    if (files.length <= 1) {
        return {
            isValid: false,
            error: 'At least 2 files to merge'
        }
    }
    return {
        isValid: true,
        error: null
    }
}