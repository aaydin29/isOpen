import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Home from './Pages/BottomTabPages/Home';
import Favorites from './Pages/BottomTabPages/Favorites';

import NearPage from './Pages/StackPages/NearPage';
import colors from './styles/colors';

import {HomeEmpty, HomeFull, HeartEmpty, HeartFull} from './components/icons';
import PlaceProvider from './context/Provider';

function BottomTab() {
  return (
    <Tab.Navigator screenOptions={tabBarsOptions}>
      <Tab.Screen name="Home" component={Home} options={HomeOptions} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={FavoritesOptions}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <PlaceProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="NearPage" component={NearPage} />
        </Stack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    </PlaceProvider>
  );
};

export default Router;

const tabBarsOptions = () => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 71,
    backgroundColor: colors.koyuGri,
  },
});

const HomeOptions = () => ({
  tabBarIcon: ({focused}) => (focused ? <HomeFull /> : <HomeEmpty />),
});

const FavoritesOptions = () => ({
  tabBarIcon: ({focused}) => (focused ? <HeartFull /> : <HeartEmpty />),
});
