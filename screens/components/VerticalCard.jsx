import { Box,Heading,Image,Pressable,Text,ZStack } from "native-base"
import { StyleSheet } from "react-native"

const VerticalCard = () =>{
return <Box mt={5}>
    <Box position="absolute" top={-20} left={12} zIndex={1} ml={7}>
     <Image
    source={{uri:"https://s3-alpha-sig.figma.com/img/b17e/3b77/77d1b68a64557fe1f46093e3dee96722?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHM0pMnEsUxaRzC4YvPuLga7HqzkWDbxvKttj8NuMSF4pLj0moJDvwxb8qKJyV4LbWMWR50ZjgnbIZ1VNjq2Dwir2wOr0aq-OspiBWOVrfeNFiwSQ3el63wKELkDgi9wg2tA6fnfXvZiIl7g0ULf8eznD6LitFmQs9x0pi4IwAjNwk2XHHniQ3QbXCdWRDDNBADjcG4c~nRAzaxEK68mzQPMkXsR61T7j5psov1XDWwJM7gtJyHKp~aIlSv5yuU2MP5Tyymm0DE3BHpTJQyDUv~KI5QJMuZF~f7TXR6yP5ZEii-TtmP8vdTYprihJwZXWffVomuQcMaq2rFVSmw2Zw__"}}
    height={65}
    width={65}
    alt="Image"
    borderRadius={20}
    />
    </Box>
    <Box padding={5} style={styles.outerContainer}>
   
    <Heading size={'md'} mt={5}>Redstorm Espo..</Heading>
    <Text>1,142 Followers</Text>
    <Pressable style={styles.container}>
        <Text style={styles.btnTxt}>Follow</Text>
    </Pressable>
</Box>
</Box>

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#EE5820",
        width:100,
        height:30,
        borderRadius:5,
        padding:5,
        marginVertical:10
    },
    btnTxt:{
        color:"#FFFFFF",
        textAlign:"center",
    
    },
    outerContainer:{
        backgroundColor:"#FFFFFF",
        width:200,
        height:180,
        borderWidth:1, 
        borderRadius:35,
        borderColor:"#FFFFFF",
        marginHorizontal:10,
        alignItems:"center",
        marginBottom:30

    }
})


export default VerticalCard