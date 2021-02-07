import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet} from 'react-native'
import TabOneScreen from '../../screens/TabOneScreen';
import { TabOneParamList } from './TabOneParamList';
const TabOneStack = createStackNavigator<TabOneParamList>();

export default function TabOneNavigator() {
    return (
       
        <TabOneStack.Navigator>
        <TabOneStack.Screen
          name="TabOneScreen"
          component={TabOneScreen}
          options={{ headerTitle: 'Tab One Title' }}
        />
      </TabOneStack.Navigator>
    )
}

const styles = StyleSheet.create({})
