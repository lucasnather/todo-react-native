import { Image, View } from "react-native";
import Logo from '../../assets/logo.png'
import { styles } from "./style";

export function Header() {
    return (
        <View style={styles.container}>
            <Image source={Logo} alt="Rocket blue and purple" style={styles.image} />
        </View>
    )
}