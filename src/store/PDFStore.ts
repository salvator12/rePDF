import { create } from 'zustand';
import { SelectedPDFs } from '@/types/SelectedPDFs';
import { AlertProps } from '@/types/AlertProps';



interface PDFStore {
    selectedFiles: SelectedPDFs[];
    
    totalSizeFiles: number;
    alertProps: AlertProps;

    setSelectedFiles: (
        files: SelectedPDFs[],
        totalSize: number
    ) => void;

    addFiles: (
        files: SelectedPDFs[],
        totalSize: number
    ) => void;

    setTotalSizeFiles: (
        totalSize: number
    ) => void;

    reorderSelectedFiles: (
        files: SelectedPDFs[]
    ) => void;

    setAlertProps: (
        type: string,
        totalSize: number,
        message: string 
    ) => void

    removeSelectedFiles: (uri: string) => void;

    clearSelectedFiles: () => void;

    clearAlertProps: () => void
}

export const usePDFStore = create<PDFStore>((set) => ({
    selectedFiles: [],
    totalSizeFiles: 0,

    alertProps: {
        type: '',
        totalSize: 0,
        message: '',
    },

    setSelectedFiles: (files, totalSize) =>
        set({
            selectedFiles: files,
            totalSizeFiles: totalSize,
        }),

    addFiles: (files, totalSize) =>
        set((state) => ({
            selectedFiles: [
                ...state.selectedFiles,
                ...files,
            ],
            totalSizeFiles: totalSize,
        })),

    setTotalSizeFiles: (totalSize) =>
        set({
            totalSizeFiles: totalSize,
        }),

    setAlertProps: (type, totalSize, message) =>
        set({
            alertProps: {
                type,
                totalSize,
                message,
            },
        }),

    reorderSelectedFiles: (files) =>
        set({
            selectedFiles: files,
        }),

    removeSelectedFiles: (id) =>
        set((state) => ({
            selectedFiles: state.selectedFiles.filter(
                (pdf) => pdf.id !== id
            ),
        })),

    clearAlertProps: () =>
        set({
            alertProps: {
                type: '',
                totalSize: 0,
                message: '',
            },
        }),

    clearSelectedFiles: () =>
        set({
            selectedFiles: [],
            totalSizeFiles: 0,
        }),
}));