import { DocumentPickerAsset } from "expo-document-picker";
import { FilesWithFormatSize } from '@/types/SelectedPDFs';

export function formatFileSize(size: number): string {
    const kb = size / 1000;
    const mb = kb / 1000;

    if (size < 1000) {
        return `${size} B`;
    }

    if (kb < 1000) {
        return `${Math.round(kb)} KB`;
    }

    return `${mb.toFixed(1)} MB`;
}

export function formatPDFSize(files: DocumentPickerAsset[]) {
    const FilesWithFormatSize: FilesWithFormatSize[] = []
    
    return files.map(file => ({
        file,
        formatFileSize: formatFileSize(file.size ?? 0)
    }))
}