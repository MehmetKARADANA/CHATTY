import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

const ContactRow = ({ name, subtitle,onPress}) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarLabel}>
            {name.split(' ').reduce((prev,current) => `${prev}${current[0]}`,'')}
            </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}




const styles = StyleSheet.create({
    row :{
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: 'white',
    },
    textContainer: {
        flex:1
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle : {
        marginTop: 4,
        color: 'gray',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 24,
        backgroundColor: '#4177fb',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    avatarLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
})        
       
export default ContactRow;