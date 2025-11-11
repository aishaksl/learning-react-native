import { Stack } from 'expo-router';
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      {/* Hides the group route */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }} />
      <Stack.Screen
        name="movie/[id]"
        options={{ headerShown: false }} />
    </Stack>
  );
}
