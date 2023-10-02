import { View } from "react-native";

const Tab = createbuttomTabNavigator()

export default function MealNavigator(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}