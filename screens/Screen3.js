import { useState } from 'react';
import { Animated, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import icon from '../assets/mouse.png'

var rs = Math.floor(Math.random() * 6 + 1);
export default function Screen3({ navigation }) {

    console.log("rs= "+rs)
    var [n, setN] = useState(0)
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
    const [locationCat, setLocationCat] = useState({
        xCat: 5,
        yCat: 5,
        marginLeftCat: new Animated.Value(0),
        marginTopCat: new Animated.Value(50)
    });

    function onPress1() {
        var y = Math.floor(Math.random() * 400);
        var xCat = location.marginLeft - 30;
        var yCat = location.marginTop - y - 80;
        setLocationCat({
            xCat: xCat,
            yCat: yCat,
            marginLeftCat: xCat,
            marginTopCat: yCat
        })
        var x = Math.floor(Math.random() * 300);
        setLocation({
            x: x,
            y: y,
            marginLeft: x,
            marginTop: y
        })

        var x1 = Math.floor(Math.random() * 300);
        var y1 = Math.floor(Math.random() * 300);
        setLocation1({
            x1: x1,
            y1: y1,
            marginLeft1: x1,
            marginTop1: y1
        })

        var x2 = Math.floor(Math.random() * 300);
        var y2 = Math.floor(Math.random() * 200);
        setLocation2({
            x2: x2,
            y2: y2,
            marginLeft2: x2,
            marginTop2: y2
        })
        setN(n+1)
    }

    function onPress2() {
        var y = Math.floor(Math.random() * 300);
        var xCat = location1.marginLeft1 - 30;
        var yCat = location1.marginTop1 + location.marginTop + locationCat.marginTopCat - y + 100;
        setLocationCat({
            xCat: xCat,
            yCat: yCat,
            marginLeftCat: xCat,
            marginTopCat: yCat
        })
        var x = Math.floor(Math.random() * 300);
        setLocation({
            x: x,
            y: y,
            marginLeft: x,
            marginTop: y
        })

        var x1 = Math.floor(Math.random() * 300);
        var y1 = Math.floor(Math.random() * 300);
        setLocation1({
            x1: x1,
            y1: y1,
            marginLeft1: x1,
            marginTop1: y1
        })

        var x2 = Math.floor(Math.random() * 300);
        var y2 = Math.floor(Math.random() * 200);
        setLocation2({
            x2: x2,
            y2: y2,
            marginLeft2: x2,
            marginTop2: y2
        })
        setN(n+1)
    }

    function onPress3() {
        var y = Math.floor(Math.random() * 300)
        var xCat = location2.marginLeft2 - 30
        var yCat = location2.marginTop2 + location1.marginTop1 + location.marginTop + locationCat.marginTopCat - y + 100
        setLocationCat({
            xCat: xCat,
            yCat: yCat,
            marginLeftCat: xCat,
            marginTopCat: yCat
        })

        var x = Math.floor(Math.random() * 300);
        setLocation({
            x: x,
            y: y,
            marginLeft: x,
            marginTop: y
        })

        var x1 = Math.floor(Math.random() * 300);
        var y1 = Math.floor(Math.random() * 300);
        setLocation1({
            x1: x1,
            y1: y1,
            marginLeft1: x1,
            marginTop1: y1
        })

        var x2 = Math.floor(Math.random() * 300);
        var y2 = Math.floor(Math.random() * 200);
        setLocation2({
            x2: x2,
            y2: y2,
            marginLeft2: x2,
            marginTop2: y2
        })
        setN(n+1)
    }

    const { marginTop, marginLeft } = location;
    const { marginTop1, marginLeft1 } = location1;
    const { marginTop2, marginLeft2 } = location2;
    const { marginTopCat, marginLeftCat } = locationCat;

    console.log(n)
    if (n==rs) {
        setN(0)
        rs = Math.floor(Math.random() * 6 + 1);
        console.log("new rs ="+rs)
        alert("Finish")
    }
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 35, marginLeft: 10, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('screen2')}>
                    <Image style={{ height: 30, width: 30 }} source={require('../assets/Previous.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ height: '90%', width: '100%' }}>
                <View style={{ marginLeft: marginLeft, marginTop: marginTop, height: 50, width: 90 }}>
                    <TouchableOpacity onPress={onPress1}>
                        <Animated.Image source={icon} style={{ height: 50, width: 90 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: marginLeftCat, marginTop: marginTopCat, height: 100, width: 100 }}>
                    <Animated.Image source={require('../assets/catt.png')} style={{ height: 100, width: 100 }} />
                </View>
                <View style={{ marginLeft: marginLeft1, marginTop: marginTop1, height: 50, width: 90 }}>
                    <TouchableOpacity onPress={onPress2}>
                        <Animated.Image source={icon} style={{ height: 50, width: 90 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: marginLeft2, marginTop: marginTop2, height: 50, width: 90 }}>
                    <TouchableOpacity onPress={onPress3}>
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