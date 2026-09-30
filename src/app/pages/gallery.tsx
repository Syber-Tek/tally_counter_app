import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Gallery = () => {
  return (
    <View className='items-center justify-center flex-1'>
      <Text>Gallery</Text>
        <Pressable className="px-2 py-1 bg-white rounded-2xl">
              <Link href={"/pages/contact"}>Contact Page</Link>
            </Pressable>
    </View>
  )
}

export default Gallery