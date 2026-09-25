import { View, Text } from 'react-native';
import { styles } from './Home.styles';
import Header from "../../components/reusable/header/Header";
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeBodyMergepdf from './MergePDF/HomeBodyMergepdf';
import AlertCard from '@/components/reusable/AlertCard/AlertCard';
import { usePDFStore } from '@/store/PDFStore';

export default function MergePDFScreen() {

  const alertProps = usePDFStore((state) => state.alertProps)

  return (
    <SafeAreaView edges={['top', 'bottom']} style={[styles.safeArea, styles.container]}>
      <Header/>
      <View style={styles.body}>
          <HomeBodyMergepdf />
      </View>
      {alertProps.message != '' &&(
          <AlertCard
          title={alertProps.type}
          subTitle={alertProps.message}
          additionalInfo={alertProps.type === 'File Size Limit' ? `${alertProps.totalSize} / 20 MB` : null} 
          errorImage={alertProps.type === 'File Size Limit' ? 
            require('../../../assets/images/icon-limit.png') 
            : 
            require('../../../assets/images/icon-files.png')
          }        
        />
      )}
    </SafeAreaView>
  )
}

