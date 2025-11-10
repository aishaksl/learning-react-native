import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-dark-200" >Welcome</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href="/movie/avangers">Avenger Movie</Link>
    </View>
  );
}



