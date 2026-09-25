import { Image, View, Text } from 'react-native';
import { styles } from './Header.styles';

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.groupTitleLogo}>
            <Image
                source={require('../../../../assets/images/Logo.png')}
                style={styles.logo}
                resizeMode='contain'
            >
            </Image>
            <Text style={[styles.title]}>RePDF</Text>
        </View>
        <View style={[styles.groupHelper]}>
            <Image
                source={require('../../../../assets/images/help.png')}
                style={styles.helpSettingsIcon}
                resizeMode='contain'
            ></Image>
            <Image
                source={require('../../../../assets/images/settings.png')}
                style={styles.helpSettingsIcon}
                resizeMode='contain'
            ></Image>
        </View>
    </View>
  )
}