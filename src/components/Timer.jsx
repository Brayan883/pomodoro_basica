import React from 'react'
import { View, Text} from 'react-native'
import { formatedTime } from '../utils/pomodoro'

const Timer = ({time}) => {   
  return (    
    <View className="py-2 px-4 flex-[0.3]" >
        <View className="bg-slate-800 flex-1 flex-col justify-center items-center rounded-lg" >
            <Text className="text-5xl text-white " >{formatedTime(time)}</Text>
        </View>
</View>
    
  )
}

export default Timer