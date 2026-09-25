import { PDFDocument } from 'pdf-lib';
import { File, Paths } from 'expo-file-system';
import { MergedPDFResult } from '@/types/MergedPDFResult';
import { formatFileSize } from './formatPDFSize';

export async function MergePDF(files: string[]): Promise<MergedPDFResult>  {
    try {
        if (files.length === 0) {
            throw new Error('No PDF files to merge');
        }
        // buat pdf tujuan
        const mergedPDF = await PDFDocument.create()
        
        for (const fileUri of files) {
            // baca PDF
            const file = new File(fileUri)

            const pdfBytes = await file.bytes()

            // load PDF
            const pdf = await PDFDocument.load(pdfBytes)

            // Copy seluruh halaman
            const pages = await mergedPDF.copyPages(
                pdf,
                pdf.getPageIndices()
            )

            pages.forEach(page => {
                mergedPDF.addPage(page)
            })
        }

        // Generate PDF hasil merge
        const mergedPdfBytes = await mergedPDF.save()

        // Simpan hasil
        const outputFile = new File(
            Paths.cache,
            'RePDF_Merged_Document.pdf'
        )

        outputFile.write(mergedPdfBytes);

        return {
            name: 'RePDF_Merged_Document.pdf',
            uri: outputFile.uri,
            size: formatFileSize(mergedPdfBytes.length),
            totalPages: mergedPDF.getPageCount(),
        };
    } catch(error) {
        console.error(
            'Failed to merge PDF:',
            error
        );

        throw error;
    }
}