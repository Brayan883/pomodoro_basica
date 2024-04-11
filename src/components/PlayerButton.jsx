import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed';
const PlayerButton = ({ isActivate, setIsActivate }) => {
    const handleStartTop = () => {
        setIsActivate(prev => !prev)
      }
  return (
    <View className="py-2 px-4 " >      
      <TouchableOpacity 
      onPress={handleStartTop}
      className=" flex-row justify-center items-center bg-[#333333]   rounded  " >
          <Text className="text-white text-lg py-2" >{isActivate ? 'pause' : 'start'}</Text>
          <Icon name={ isActivate ? 'pause' : 'play-arrow' } size={30} color="white" />
      </TouchableOpacity>      
    </View>
  )
}

export default PlayerButton