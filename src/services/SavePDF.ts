import { File, Paths } from 'expo-file-system';
import { Platform } from 'react-native';
import * as Sharing from 'expo-sharing';
import { StorageAccessFramework } from 'expo-file-system/legacy';

export async function SavePDF(uri: string, fileName: string): Promise<string | null> {
    try {
        if(Platform.OS == 'android') {
            // Minta user milih folder
            const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();

            // User menekan Cancel
            if (!permissions.granted) {
                return null;
            }

            const directoryUri = permissions.directoryUri;

            // Baca PDF dari cache sebagai Base64
            const sourceFile = new File(uri)
            const base64 = await sourceFile.base64()

            // Buat file baru di folder yang dipilih user
            const newFileUri = await StorageAccessFramework.createFileAsync(directoryUri, fileName, 'application/pdf')

            // Tulis Base64 ke File
            await StorageAccessFramework.writeAsStringAsync(
                newFileUri,
                base64,
                {
                    encoding: 'base64'
                }
            )

            return newFileUri
        } else if (Platform.OS == 'ios') {
            const available = Sharing.isAvailableAsync()

            if (!available) {
                throw new Error(
                    'Sharing is not available on this device'
                );
            }

            // Buka native share sheet.
            // User bisa memilih "Save to Files".
            await Sharing.shareAsync(uri, {
                UTI: 'com.adobe.pdf',
                dialogTitle: 'Save PDF',
            });

            return uri;
        }
        return null
    } catch (error){
        console.error('Failed to save PDF:', error);
        throw error;
    }
}