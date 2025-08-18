import { View,Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    onPress: ()=>void;
}

export default function CircleButton({onPress}:Props){
    return(
        <View>
            <Pressable onPress={onPress}>
                <MaterialIcons/>
            </Pressable>
        </View>
    )
}