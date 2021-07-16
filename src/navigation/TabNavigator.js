import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@ui-kitten/components'
import  FeedNavigator  from './StackNavigator'

import Feed from '../screens/Feed'
import Search from '../screens/Search'
import AddPost from '../screens/AddPost'
import Activity from '../screens/Activity'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator();
    //<NavigationContainer>
    function TabNavigator()  {
        return(
            <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} options= {{
        tabBarIcon: ({ focused }) => (
          <Icon
            name='home-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }}/>

    <Tab.Screen name="Search" component={Search} options= {{
        tabBarIcon: ({ focused }) => (
          <Icon
            name='search-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }} />

    <Tab.Screen name="AddPost" component={AddPost} options= {{
        tabBarIcon: ({ focused }) => (
          <Icon
            name='plus-square-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }} />

    <Tab.Screen name="Activity" component={Activity} options= {{
        tabBarIcon: ({ focused }) => (
          <Icon
            name='heart-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }}/>
    <Tab.Screen name="Profile" component={Profile} options={ {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='person-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    }
  />
  </Tab.Navigator>
  </NavigationContainer>
        )
  //
//     {
//     Feed: {
//       screen: Feed
//     },
//     Search: {
//       screen: Search
//     },
//     AddPost: {
//       screen: AddPost
//     },
//     Activity: {
//       screen: Activity
//     },
//     Profile: {
//       screen: Profile
//     }
//   }
    }


  
  export default TabNavigator