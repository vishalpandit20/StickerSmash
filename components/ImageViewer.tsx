import { ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
type Props = {
    imgSource:ImageSourcePropType,
    selectedImage?:string
}

export default function ImageViewer({imgSource,selectedImage}:Props){
    const imageSource = selectedImage? {uri:selectedImage}: imgSource;
    
    return <Image source={imageSource} style={styles.Image}/>
}

const styles = StyleSheet.create({
    Image:{
        width:320,
        height:340,
        borderRadius:18
    }
}) 