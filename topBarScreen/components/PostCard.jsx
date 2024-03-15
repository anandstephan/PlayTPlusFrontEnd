import { Box, Heading, HStack, Image, Text, View, VStack } from "native-base"
import ThreeDot from "../../screens/images/threeDot"
import { StyleSheet } from "react-native"
import Heart from "../../screens/images/heart"
import Comment from "../../screens/images/comment"
import Share from "../../screens/images/share"
import GroupImg from "../../screens/images/groupImg"

const PostCard = () =>{
return <Box my={2} backgroundColor={'#FFFFFF'}>
    <HStack justifyContent={'space-between'} alignItems={'center'} mx={2} my={2}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Image
        source={{uri:"https://s3-alpha-sig.figma.com/img/277b/c3e5/d648c8652c56d6bec5942dedbbab63a2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZeBrV4dNE3BDyUarLEIuazA4w1k~BLWmCOjmRpcPyZRRjpRZDbmDkmw718SxYTLm0HrXVIPFZO9nxCQ7DigFfq4v2aHiYbWEr7PgH9q3X2iwMgURimB9NPrR1inm-ESDmnNIalPeqimw~YpjIl107aNhpXkp5sZsQvlrY6G50JaA5Bz-5Srkpe2ED0ijUtoK699sStwI9CYGjvdiF232QhTxb2e2br~ecdi8zaAc3KlbiJtIMt-qKMsGz1ISGMxPb4M9QNKptfyL5OLia63dzgUySc6Chn0gL6rgR1hvAQOm7JN7jjCfrI1aY6II0jMnxq1wie4jPxhWzVNqtlV0fg__"}}
        height={70}
        width={70}
        borderRadius={10}
        alt="img"
       />
       <VStack mx={2}>
        <Heading size={'sm'}>Nox Gaming</Heading>
        <Text>3.2K Members . 4d ago</Text>
       </VStack>
       </HStack>
        <ThreeDot/>
    </HStack>
    <VStack mx={2}>
    <Text style={style.txtStyle}>Hey Guys!</Text>
    <Text style={style.txtStyle}>Been a while. Let’s play a tournament!</Text>
   <Image
   source={{uri:"https://s3-alpha-sig.figma.com/img/3204/c7ae/ab1c5b8b619811162d2f640768dfdec3?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S9YX-th1f3VOXKQt0kItTrPw2anDzDrekjKV85gZx6ww7BC~huQVZfs4icAAfZm6J7vnWFHF1ZE21Juj~pQf227sxtXCjMcXkjE4mfQIcd05qb7ZPX7P3ttEDprWB58X7U9uUWbxjMyTxwJKfMEV9Ij~NWQ-fGyeltvCS~m2lo5Tlc5GHU6qdYMl2Cj3Y4QOtLl4F4GXfbDxu5K9MX9zg4hbKdc8rc7GtMLORBG0o06klLEhzsEc2cBpCA5rYJgFscDkZmz7XE7xSwLmwJ7zRolRLn9fGRkEIB-ou9EBKBW1wIBwNHZxg6jtwpBXUxEWjCzsIaD-~KfNu6K3vuaKEA__"}}
   width={'100%'}
   height={280}
   alt="img"
   borderRadius={30}
   my={2}
   />
   <HStack mt={5}  alignItems={'center'} mx={5}>
    <HStack justifyContent={'space-between'} alignItems={'center'}>
    <Heart/>
    <Text ml={2}>214</Text>
    </HStack>
    <HStack justifyContent={'space-between'} alignItems={'center'} mx={5}>
    <Comment/>
    <Text ml={2}>24</Text>
    </HStack>
    <View mx={5}>
    <Share/>
    </View>
   </HStack>
   <HStack alignItems={'center'} mx={2}>
    <GroupImg/>
    <Text bold>Liked by Jamie and 25 others</Text>
   </HStack>
    </VStack>


</Box>
}

export default PostCard

const style = StyleSheet.create({
    txtStyle:{
        fontSize:15
    }
})