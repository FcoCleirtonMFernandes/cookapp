import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { router } from 'expo-router';
import MaterialIcons  from '@expo/vector-icons/MaterialIcons';

import { styles } from './styles';
import { Recipe } from '@/components/Recipe';

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons 
          name='arrow-back'
          size={32}
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Ingredientes</Text>
      </View>
      
      <FlatList 
        data={['1']}
        keyExtractor={item => item}
        renderItem={() => (
          <Recipe recipe={{ name: 'Omelete', image: 'https://th.bing.com/th/id/R.9eafdb4139f771d6f30985a99cad2114?rik=fIGJqUfs3i9PrA&riu=http%3a%2f%2fwww.elizabethpeddey.com.au%2fwp-content%2fuploads%2f2020%2f04%2fOMELETTE-scaled.jpg&ehk=uW9E4LaCXiDOMfJZ1x%2focqEG7Yjl46YbspiXgBQog%2fI%3d&risl=&pid=ImgRaw&r=0', minutes: 10 }}/>
        )}
      />

    </View>
  );
}