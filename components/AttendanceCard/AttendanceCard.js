import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
import {styles} from './styles'

export default function AttendanceCard(props){
  return (
    <TouchableOpacity style={[styles.attendanceCard, props.checkIn ? {opacity: 0.3, scaleX:.7, scaleY:.7} : null ]} onPress={props.onPress}>
      
      {props.checkIn
        ? <View style={styles.present}>
            <Icon name="check-circle" color="white" size={20}/>
        </View>
        : null
      }
      <Image 
        source={{uri:props.img_uri}}
        style={{
          flex: 1,
          width: 80,
          height:80,
          resizeMode: 'cover'
        }}
        />
      <Text style={styles.text}>{props.f_name} {props.l_name || ' '}</Text>
    </TouchableOpacity>
  )
}