import { useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import icon from '../assets/mouse.png'


export default function Screen2({ navigation }) {

    const [location, setLocation] = useState({
        x: 5,
        y: 5,
        marginLeft: new Animated.Value(50),
        marginTop: new Animated.Value(50)
    });
    const [location1, setLocation1] = useState({
        x1: 5,
        y1: 5,
        marginLeft1: new Animated.Value(0),
        marginTop1: new Animated.Value(50)
    });
    const [location2, setLocation2] = useState({
        x2: 5,
        y2: 5,
        marginLeft2: new Animated.Value(50),
        marginTop2: new Animated.Value(50)
    });

    function onPress() {
        var x = Math.floor(Math.random() * 300);
        var y = Math.floor(Math.random() * 400);

        var x1 = Math.floor(Math.random() * 300);
        var y1 = Math.floor(Math.random() * 300);

        var x2 = Math.floor(Math.random() * 300);
        var y2 = Math.floor(Math.random() * 200);
        setLocation({
            x: x,
            y: y,
            marginLeft: x,
            marginTop: y
        })
        setLocation1({
            x1: x1,
            y1: y1,
            marginLeft1: x1,
            marginTop1: y1
        })
        setLocation2({
            x2: x2,
            y2: y2,
            marginLeft2: x2,
            marginTop2: y2
        })
    }

    const { marginTop, marginLeft } = location;
    const { marginTop1, marginLeft1 } = location1;
    const { marginTop2, marginLeft2 } = location2;
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 35, marginLeft: 10, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('screen1')}>
                    <Image style={{ height: 30, width: 30 }} source={require('../assets/Previous.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('screen3')}>
                    <Image style={{ height: 30, width: 30 }} source={require('../assets/next.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ height: '90%', width: '100%' }}>
                <View style={{ marginLeft: marginLeft, marginTop: marginTop, height: 50, width: 90 }}>
                    <TouchableOpacity onPress={onPress}>
                        <Animated.Image source={icon} style={{ height: 50, width: 90 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: marginLeft1, marginTop: marginTop1, height: 50, width: 90 }}>
                    <TouchableOpacity onPress={onPress}>
                        <Animated.Image source={icon} style={{ height: 50, width: 90 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: marginLeft2, marginTop: marginTop2, height: 50, width: 90 }}>
                    <TouchableOpacity onPress={onPress}>
                        <Animated.Image source={icon} style={{ height: 50, width: 90 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});