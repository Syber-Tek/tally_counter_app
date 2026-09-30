import { Link } from "expo-router";
import { useState } from "react";
import { Text, View, Button, Pressable } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  function remove() {
    // if (count! > 0) {
    //   setCount(count - 1);
    // }
    count ? setCount(count - 1) : count > 0 ;
  }
  return (
    <View className="flex items-center justify-center flex-1 gap-2 bg-slate-900">
      <Text className="text-6xl text-white">{count}</Text>
      {/* Buttons */}
      <View className="flex flex-row items-center gap-2 text-center">
        {/* Add */}
        <Pressable className="px-5 py-3 bg-red-600 rounded-full" onPress={add}>
          <Text className="text-2xl text-white">+</Text>
        </Pressable>
        {/* Reset */}
        <Pressable className="px-5 py-3 bg-red-600 rounded" onPress={reset}>
          <Text className="text-2xl text-white">reset</Text>
        </Pressable>
        {/* Remove */}
        <Pressable
          className="px-5 py-3 bg-red-600 rounded-full"
          onPress={remove}
        >
          <Text className="text-2xl text-white">-</Text>
        </Pressable>
      </View>
      <Pressable className="px-2 py-1 bg-white rounded-2xl">
        <Link href={"/pages/contact"}>Contact Page</Link>
      </Pressable>
      <Pressable className="px-2 py-1 bg-white rounded-2xl">
        <Link href={"/pages/gallery"}>Gallery Page</Link>
      </Pressable>
    </View>
  );
}

// a minus and add button and also a reset button .. ..then the text
