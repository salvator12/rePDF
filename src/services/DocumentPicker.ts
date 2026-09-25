import * as DocumentPicker from 'expo-document-picker';

export async function pickPDFs() {
    const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        multiple: true
    })

    if (result.canceled) return null;

    return result.assets;
}