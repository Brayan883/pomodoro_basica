import React from 'react'
import { View , Text, TouchableOpacity } from 'react-native'
import {options} from '../constant/pomodoro'
const Navigation = ({time, currentTime, setCurrentTime, setTime }) => {
    
    const handlePress = (index) => {        
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15        
        setCurrentTime(index)
        setTime(newTime * 60)
    }
   

  return (
    <View className="flex flex-row  gap-1 w-full p-4 " >
        {options?.map((option , index) => (
            <TouchableOpacity 
            key={index} 
            onPress={() => handlePress(index)}  
            className={`py-2  flex-grow  items-center  rounded-lg  ${currentTime === index ? 'bg-blue-900/90' : 'bg-blue-950/90'} `} >
                <Text className="text-xs   text-white " > {option} </Text>
            </TouchableOpacity>
        ))}        
    </View>
  )
}

export default Navigation