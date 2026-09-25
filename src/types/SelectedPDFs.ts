import * as DocumentPicker from "expo-document-picker";

export interface FilesWithFormatSize {
    file: DocumentPicker.DocumentPickerAsset,
    formatFileSize: string
};

export interface SelectedPDFs {
  id: string,
  pdf: FilesWithFormatSize;
  pageCount: number;
};

