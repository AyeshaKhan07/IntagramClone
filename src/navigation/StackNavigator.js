import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Feed from '../screens/Feed'
import Profile from '../screens/Profile'


const stack = createStackNavigator();
const FeedNavigator = () => (
<NavigationContainer independent={true}>
  <stack.Navigator>
    <stack.Screen name='Social App' component={Feed}/>
    <stack.Screen name='Profile' component={Profile}/>
  </stack.Navigator>
</NavigationContainer>
)

export default FeedNavigator
// NavigationContainer(
//   createStackNavigator({
//     Feed: {
//       screen: Feed,
//       navigationOptions: {
//         headerTitle: 'Social App'
//       }
//     }
//   })
// )