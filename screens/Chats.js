import React from 'react';
import { 
    View,
     Text,
     SafeAreaView,
     TouchableOpacity,
     StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactRow from '../components/ContactRow';
import Separator from '../components/Separator';

const Chats = () => {
  return (
    <SafeAreaView style={{}}>

        <ContactRow 
        name="Mehmet Karadana"
        subtitle="Hii I m waiting you"
        onPress={() => {
            alert('Hi Mehmeeet');
        }}/>
        <Separator/>
         <ContactRow 
        name="Mehmet Best"
        subtitle="Hii I m waiting you"
        onPress={() => {
            alert('Hi Mehmeeet');
        }}/>
    </SafeAreaView>
  );
}




export default Chats;