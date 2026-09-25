import * as Sharing from 'expo-sharing';

export async function sharePDF(uri: string) {
    try {
        const available = await Sharing.isAvailableAsync();

        if (!available) {
            throw new Error('Sharing is not available on this device');
        }

        await Sharing.shareAsync(uri, {
            mimeType: 'application/pdf',
            dialogTitle: 'Share PDF',
        });

    } catch (error) {
        console.error('Failed to share PDF:', error);
        throw error;
    }
}