import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet } from 'react-native'
import TabTwoScreen from '../../screens/TabTwoScreen';
import { TabTwoParamList } from './TabTwoParamList';
const TabTwoStack = createStackNavigator<TabTwoParamList>();

export default function TabTwoNavigator() {
    return (
       
    <TabTwoStack.Navigator>
    <TabTwoStack.Screen
      name="TabTwoScreen"
      component={TabTwoScreen}
      options={{ headerTitle: 'Tab Two Title' }}
    />
  </TabTwoStack.Navigator>
    )
}

const styles = StyleSheet.create({})


