import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Styles from '../../res/Styles';
import Colors from '../../res/Colors';
import Strings from '../../res/Strings';

function MyTab({ state, descriptors, navigation }) {
    return (
        <View style={Styles.tabLayoutStyle}>
            {
                state.routes.map((route, index) => {

                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, height: 56, justifyContent: 'center', alignItems: 'center', }}
                        >
                            {index == 0 &&
                                <View style={Styles.tabContainerStyle}>
                                    <Image source={require('../../res/images/tab_chat.png')} style={[Styles.tabIconStyle, { tintColor: isFocused ? Colors.color_red : Colors.color_black }]} />
                                    <Text style={[Styles.tabTextStyle, { color: isFocused ? Colors.color_red : Colors.color_black }]}>{Strings.meetandchat}</Text>
                                </View>
                            }
                            {index == 1 &&
                                <View style={Styles.tabContainerStyle}>
                                    <Image source={require('../../res/images/tab_clock.png')} style={[Styles.tabIconStyle, { tintColor: isFocused ? Colors.color_red : Colors.color_black }]} />
                                    <Text style={[Styles.tabTextStyle, { color: isFocused ? Colors.color_red : Colors.color_black }]}>{Strings.meetings}</Text>
                                </View>}
                            {index == 2 &&
                                <View style={Styles.tabContainerStyle}>
                                    <Image source={require('../../res/images/tab_contact.png')} style={[Styles.tabIconStyle, { tintColor: isFocused ? Colors.color_red : Colors.color_black }]} />
                                    <Text style={[Styles.tabTextStyle, { color: isFocused ? Colors.color_red : Colors.color_black }]}>{Strings.contacts}</Text>
                                </View>}
                            {index == 3 &&
                                <View style={Styles.tabContainerStyle}>
                                    <Image source={require('../../res/images/tab_setting.png')} style={[Styles.tabIconStyle, { tintColor: isFocused ? Colors.color_red : Colors.color_black }]} />
                                    <Text style={[Styles.tabTextStyle, { color: isFocused ? Colors.color_red : Colors.color_black }]}>{Strings.settings}</Text>
                                </View>}

                        </TouchableOpacity>
                    );
                })}
        </View>
    );
}
export default MyTab;