import {Text,View,Pressable,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

type Props = {
    label: string,
    theme?:"primary",
    onPress?:()=> void
}

export default function button({label,theme,onPress}:Props){
    if(theme === 'primary'){
        return(
            <View style={[styles.buttonContainer ,{borderRadius:18,borderWidth:4,borderColor:'#ffd33d'}]}>
                <Pressable style = {[styles.button,{backgroundColor:'#fff'}]} onPress={onPress}>
                    <FontAwesome name='picture-o' size={18} color='#25292e' style={styles.buttonIcon}/>
                    <Text style={[styles.buttonLabel,{color:'#25292e'}]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
return(
    <View style = {styles.buttonContainer}>
        <Pressable style = {styles.button} onPress={onPress}>
            <Text style = {styles.buttonLabel}>{label}</Text>
        </Pressable>
    </View>
)
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:320,
        height:68,
        marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        padding:3,
    },
    button:{
        borderRadius:10,
        width:'100%',
        height:"100%",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    buttonLabel:{
        color:'#fff',
        fontSize:16
    },
    buttonIcon:{
        paddingRight:8,
    }
},
)