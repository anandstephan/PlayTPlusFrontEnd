import { Text } from "react-native"
import { Heading, HStack, ScrollView, VStack } from "native-base"
import Card from "./components/Card"
import VerticalCard from "./components/VerticalCard"
import { useState } from "react"
const Community = () =>{

    const [data,setData] = useState([
        {
            imgUrl:"https://s3-alpha-sig.figma.com/img/9ec6/cdd4/263b82e8bee0f94dd860ce5d9d192690?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ITMTzifHSUZl0dCQ3A~F-dIFV6GYwAgRvqRCHyvMKKjnfxUH4CdfE81Ou1u2loiAgKNzU0Ux8CSmvbmm5pT3coGeTPwbus8apisJK84ReBDgzCFsP5RwfX1cyqBMydPkrZFhFtJwGrkqsMUGDo7B84HBraL8EB~A3RH7Y-zHhZ~9Wje8KP9lEe9ISnRYH06esNiUMB4rxKtxMxMMDFljHMEC4kTmFZUmJ6pclDG7~zGVfn5XEAYkN6E1VUWOpDVGAgGFgXtftLZKihGRhABj8eHXa6EvothUpKAijOpuwvWnskZ7PK~Gkb-AuZSon4UWwcYbSImDCA2JNDuolcr4rg__",
            heading:"Lethal ESports",
            subHeading:"Community Member",
            shown:true
        },
        {
            imgUrl:"https://s3-alpha-sig.figma.com/img/277b/c3e5/d648c8652c56d6bec5942dedbbab63a2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZeBrV4dNE3BDyUarLEIuazA4w1k~BLWmCOjmRpcPyZRRjpRZDbmDkmw718SxYTLm0HrXVIPFZO9nxCQ7DigFfq4v2aHiYbWEr7PgH9q3X2iwMgURimB9NPrR1inm-ESDmnNIalPeqimw~YpjIl107aNhpXkp5sZsQvlrY6G50JaA5Bz-5Srkpe2ED0ijUtoK699sStwI9CYGjvdiF232QhTxb2e2br~ecdi8zaAc3KlbiJtIMt-qKMsGz1ISGMxPb4M9QNKptfyL5OLia63dzgUySc6Chn0gL6rgR1hvAQOm7JN7jjCfrI1aY6II0jMnxq1wie4jPxhWzVNqtlV0fg__",
            heading:"Nox Gaming Official",
            subHeading:"Community Member",
            shown:false
        },
        {
            imgUrl:"https://s3-alpha-sig.figma.com/img/aa77/fdf7/0c13fa5ab0bc75559dd922fa6c1493e4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QH2bMWdVSKF5Mpjgx64OpPwjhAJfjY00O7coT~54XKmlh34NVqGRHfD-5jc8x5OLb9W52Xf4NmcwZIRw9jGc6xe4oCXs5s-YrPAi2cYZFd7aHPzMvZ3aKwHA9Hsw3cRtxxg4N7pgsfqA2p8vOgNzOiVLGzEZDahyLRbR8qkWAGSj0vBIe28FC6ynhrSsjgp8SzaUT2tar5hxi0k7o~FVl~ijtLIinRQdyTTij6e94qfXZMxb7Ru52qt~jyDybTSRZe4oAqNi5CS3cLdgKrw85FEeyrliXFIamfwOyTOHZOk3m4QzEAtOIR8tZDP75lxSH0pCIHNcLodCLS5T-3MaPg__",
            heading:"Rebeldancers",
            subHeading:"Community Member",
            shown:false
        },
        {
            imgUrl:"https://s3-alpha-sig.figma.com/img/d2bf/4df0/d0685c5eaf41c15493cc1d03a4366f48?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghseVrGT8j2Kp~133YIDTDmyAj3UU6k3yoWyCZug5P~f0PuwjEWVtn5QWyFiRB9s93DOqLWQEHd1OV~nEkV8zFjqNlByaNSEU3WmU7G~uCSWzAVwpA52zulY9FnfjYQgSJF-BxV~Z4cpbGAShVOr1gdO2XQ1BM4qcGWSF7rhCMNNMfojihqyRsIH49KKDJZ7fWiM4AMl9FiLK6mJx5CayiE7x070HxnP~h-zPws-2yb9dpNqBlTSPn5sMWdT~JSJDzibFynOrGv9xxW1cdHa1S9hhIF2T07fwdAWUepiLyWbDd5LKewwUZwlYrZPC~czFGWY0oavxFeuN41ZRmbwlw__",
            heading:"PunandFun",
            subHeading:"Community Member",
            shown:false
        }
    ])

return <ScrollView nestedScrollEnabled={true}>
    <HStack mx={2} mt={5} justifyContent={'space-between'} alignItems={'center'} my={2}>
        <Heading size={'md'}>Your Communities</Heading>
        <Heading size={'sm'} color={'#EE5820'}>Create Community</Heading>
    </HStack>
<ScrollView>
        {
            data.map((item,idx) => <Card key={idx} {...item}/>)
        }
</ScrollView>
<Heading marginY={2} marginX={5}>Follow More Communities</Heading>
<ScrollView horizontal>
<VerticalCard/>
<VerticalCard/>
<VerticalCard/>
</ScrollView>

</ScrollView>
}

export default Community