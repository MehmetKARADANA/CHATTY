import React from "react";
import { View,StyleSheet } from "react-native";

const Separator = () => {
    return <View style={styles.seperator} />
}

const styles = StyleSheet.create({
 seperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#E8E8E8',
        marginStart: 72,
    }
}) 

export default Separator;
