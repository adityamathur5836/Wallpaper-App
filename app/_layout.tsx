import { DownloadPicture } from '@/components/BottomSheet';
import { useWallpapers } from '@/hooks/useWallpapers';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {
    const walletpapers = useWallpapers();
    return <GestureHandlerRootView>
        <DownloadPicture wallpaper={walletpapers[0]} onClose={() => { }}/>
        <Stack screenOptions={{
            headerShown: false
        }} >
        </Stack>
    </GestureHandlerRootView>
}