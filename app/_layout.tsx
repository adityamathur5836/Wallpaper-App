import { useWallpapers } from '@/hooks/useWallpapers';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {
    const walletpapers = useWallpapers();
    return <GestureHandlerRootView>
        <Stack screenOptions={{
            headerShown: false
        }} >
        </Stack>
    </GestureHandlerRootView>
}