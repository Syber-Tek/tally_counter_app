import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitleAlign: "center", title: "Home" }}
      />
      <Stack.Screen
        name="pages/gallery"
        options={{ headerTitleAlign: "center", title: "Gallery" }}
      />
      <Stack.Screen
        name="pages/contact"
        options={{ headerTitleAlign: "center", title: "Contact" }}
      />
    </Stack>
  );
}
