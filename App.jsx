import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, Text, TouchableOpacity, View } from 'react-native';


import Constants from 'expo-constants'
import Navigation from './src/components/Navigation';
import { useEffect, useState } from 'react';
import { colors } from './src/constant/pomodoro';
import Timer from './src/components/Timer';
import PlayerButton from './src/components/PlayerButton';


export default function App() {
  const [ isworking, setIsWorking ] = useState(false)
  const [time , setTime] = useState(25 * 60)
  const [currentTime , setCurrentTime] = useState('pomo' | 'short' | 'break')
  const [isActivate , setIsActivate] = useState(false)

  useEffect(() => {
    let timer = null

    if(isActivate && time > 0) {
      timer = setInterval(() => {
        setTime(prev => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }

    if(isActivate && time === 0) {
      setIsActivate(false)
      setIsWorking(prev => !prev)
      setTime(isworking ? 300 : 1500 )
      return () => clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [isActivate, time])

  return (
    <SafeAreaView  
    style={{marginTop: Constants.statusBarHeight, backgroundColor: colors[currentTime] }} 
    className={`flex-1  py-20 px-4 }`} >      
     <Text className="text-2xl  px-2 text-slate-100 " > Pomodoro </Text>      
      <Navigation  
      setTime={setTime} 
      currentTime={currentTime} 
      setCurrentTime={setCurrentTime}
      />      
      <Timer time={time} />
      <PlayerButton 
        isActivate={isActivate} 
        setIsActivate={setIsActivate}         
      />            
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}