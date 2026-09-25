import { getPageCount } from 'expo-pdf-text-extract';
import * as Crypto from 'expo-crypto';
import { FilesWithFormatSize, SelectedPDFs } from '@/types/SelectedPDFs';


export async function PDFPageCount(files: FilesWithFormatSize[]): Promise<SelectedPDFs[]> {
    try {
        var finalFiles: SelectedPDFs[] = []
        for (const file of files) {
            const totalPage = await getPageCount(file.file.uri);
            finalFiles.push({
                id: Crypto.randomUUID(),
                pdf: file,
                pageCount: totalPage
            });
        }
        return finalFiles
    } catch (error) {
        console.error('Failed to get PDF page count:', error);
        throw error;
    }
}