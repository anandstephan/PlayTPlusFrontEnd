import { Text, View } from "native-base"
import { StyleSheet } from "react-native"
const InfoButton = ({children}) =>{
return <View style={style.container}>
        <Text style={style.txt}>{children}</Text>
</View>
}

export default InfoButton

const style = StyleSheet.create({
    container:{
        borderColor:"#EE5820",
        borderWidth:1,
        padding:5,
        borderRadius:20,
        width:'40%',
        marginTop:20,
        marginHorizontal:20,
      
    },
    txt:{
        color:'#EE5820',
        textAlign:"center"
    }
})