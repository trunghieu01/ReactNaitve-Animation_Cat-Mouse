import { useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import icon from '../assets/mouse.png'


export default function Screen1({ navigation }) {

    const [location, setLocation] = useState({
        x: 5,
        y: 5,
        marginLeft: new Animated.Value(130),
        marginTop: new Animated.Value(200)
    });

    function onPress(evt) {
        var x = evt.nativeEvent.locationX - 30;
        var y = evt.nativeEvent.locationY - 30;
        setLocation({
            x: x,
            y: y,
            marginLeft: x,
            marginTop: y
        })
    }
    const { marginTop, marginLeft } = location;
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 35, marginLeft: 10, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('screen2')}>
                    <Image style={{ height: 30, width: 30 }} source={require('../assets/next.png')}></Image>
                </TouchableOpacity>
            </View>
            <View
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderGrant={onPress}
                style={{ height: '90%', width: '100%' }}>
                <Animated.Image
                    source={icon}
                    style={{ marginLeft: marginLeft, marginTop: marginTop, height: 50, width: 90 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});