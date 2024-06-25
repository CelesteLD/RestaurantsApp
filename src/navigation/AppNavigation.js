import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { Restaurants } from '../screens/RestaurantsScreen'
import { FavoritesScreen } from '../screens/FavoritesScreen'
import { AccountScreen } from '../screens/AccountScreen'
import { SearchScreen } from '../screens/SearchScreen'
import { RankingScreen } from '../screens/RankingScreen'


const tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#00a680",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({ color, size }) => tabBarActiveOptions(route, color, size)
        })}>
            <tab.Screen name="RESTAURANTS" component={Restaurants}/>
            <tab.Screen name="FAVORITES" component={FavoritesScreen}/>
            <tab.Screen name="SEARCH" component={SearchScreen}/>
            <tab.Screen name="RANKING" component={RankingScreen}/>
            <tab.Screen name="ACCOUNT" component={AccountScreen}/>
        </tab.Navigator>
    );
}

function tabBarActiveOptions(route, color, size) {
    let iconName;
    switch (route.name) {
        case "RESTAURANTS":
            iconName = "compass-outline";
            break;
        case "FAVORITES":
            iconName = "heart-outline";
            break;
        case "SEARCH":
            iconName = "magnify";
            break;
        case "RANKING":
            iconName = "star-outline";
            break;
        case "ACCOUNT":
            iconName = "home-outline";
            break;
    }
    return (
        <Icon 
            type="material-community"
            name={iconName}
            color={color}
            size={size}
        />
    );
}