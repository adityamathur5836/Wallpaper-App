import { Wallpaper } from "@/hooks/useWallpapers";
import { View, StyleSheet, Image, useColorScheme, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function ImageCard({wallpaper, onPress}:{
    wallpaper: Wallpaper,
    onPress: () => void
}){

    const theme = useColorScheme() ?? 'light';

    return <Pressable onPress={onPress}>
        <View>
            <Image source={{uri: wallpaper.url.toString()}} style = {styles.image}/>
            <View style = {styles.labelContainer}>
                <ThemedText style = {styles.label }>{wallpaper.name}</ThemedText>
                <View style = {styles.iconContainer} >
                    <Ionicons 
                    name="heart"
                    size={18}
                    color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}/>
                </View>
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        height: 220,
        borderRadius: 20
    },
    label: {
        color: 'white'
    },
    labelContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
})