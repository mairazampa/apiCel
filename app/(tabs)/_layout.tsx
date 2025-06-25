import { Tabs } from 'expo-router';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{headerShown: false,}}>
       <Tabs.Screen
            name="index"
            options={{
              title: '',
              tabBarIcon: ({ focused }) => (
                <CustomTabBarIcon focused={focused} iconName="home" label="INICIO" />
              ),
            }}
          />
          <Tabs.Screen
            name="chat"
            options={{
              title: '',
              tabBarIcon: ({ focused }) => (
                <CustomTabBarIcon
                  focused={focused}
                  iconName="chatbubbles-sharp"
                  label="TEXTO"
                />
              ),
            }}
          />
          <Tabs.Screen
            name="image-camera"
            options={{
              tabBarIcon: ({ focused }) => (
                <CustomTabBarIcon focused={focused} iconName="image" label="IMAGE" />
              ),
            }}
          />
          <Tabs.Screen
            name="sala"
            options={{
              tabBarIcon: ({ focused }) => (
                <CustomTabBarIcon focused={focused} iconName="chatbubbles-outline" label="SALA" />
              ),
            }}
          />
      
    </Tabs>
  );
}

const CustomTabBarIcon = ({ focused, iconName, label }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      backgroundColor: focused ? "black" : "transparent",
      padding: 10,
      borderRadius: 30,
      height: 40,
    }}
  >
    <Ionicons name={iconName} size={20} color={focused ? "white" : "#72777A"} />
    {focused && <Text style={{ color: "white" }}>{label} fkjdsdkfl</Text>}
  </View>
);