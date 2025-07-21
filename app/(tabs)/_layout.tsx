import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Text, View } from 'react-native';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      tabBarStyle: {
         height: Platform.OS === 'android' ? 60 : 80,
       backgroundColor: '#F9FAFB',
          borderTopWidth: 0.5,
        borderTopColor: '#E5E7EB',
         paddingBottom: Platform.OS === 'android' ? 6 : 10,
       },
      }}
    >
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
        name="reunion"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon focused={focused} iconName="chatbubbles-outline" label="SALA" />
          ),
        }}
      />
        <Tabs.Screen
  name="login"
  options={{
   href: null, // oculta del tab bar
   // tabBarStyle: { display: "none" },
  }}
/>
<Tabs.Screen
  name="salita"
  options={{
    href: null, // oculta del tab bar
  //  tabBarStyle: { display: "none" },
  }}
/>
        {/* Ocultar estas rutas del Tab Bar 
  <Tabs.Screen name="salita" options={{ href: null }} />
  <Tabs.Screen name="login" options={{ href: null }} />*/}
    </Tabs>
      
   
  );
}

type CustomTabBarIconProps = {
  focused: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
};

const CustomTabBarIcon = ({ focused, iconName, label }: CustomTabBarIconProps) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Ionicons name={iconName} size={24} color={focused ? 'black' : '#72777A'} />
    <Text
      style={{
        fontSize: 10,
        color: focused ? 'black' : '#72777A',
        marginTop: 4,
      }}
    >
      {label}
    </Text>
  </View>

);