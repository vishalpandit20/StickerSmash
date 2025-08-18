import { StyleSheet, View } from "react-native"
import { Stack,Link } from "expo-router"

export default function NotFoundScreen(){
    return(
        <>
    <Stack.Screen options={{title:"Oops! This location does not exists"}}/>
    <View style={styles.container}>
        <Link href="/(tabs)" style={styles.button}>
            Go back to home screen
        </Link>
    </View>
    </>
    )    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#25292e",
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        fontSize:20,
        color:'#fff',
        textDecorationLine:"underline"
    }
})                  