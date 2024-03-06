import { useState, useEffect } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';

import { services } from '@/services'

import { Ingredient } from '@/components/Ingredient';
import { Selected } from '@/components/Selected';
import { Loading } from '@/components/Loading';

import { styles } from './styles';

export default function Home() {
  const [selected, setSelected] = useState<string[]>([])
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const [isloading, setIsLoading] = useState(true)
  
  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value ))
    }
    setSelected((state) => [...state, value])
    //console.log(selected)
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      {text: 'Não', style: 'cancel'},
      {text: 'Sim', onPress: () => setSelected([])},
    ])
  }

  function handleSearch() {
    router.navigate("/recipes/" + selected )
  }

  useEffect(() => {
    services.ingredients
      .findAll()
      .then(setIngredients)
      .finally(() => setIsLoading(false))
  }, [])

  if(isloading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha {'\n'} 
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

      <ScrollView
        contentContainerStyle={styles.ingredient}
        showsVerticalScrollIndicator={false}
      >
        {/*Array.from({ length: 100 }).map((item, index) => (
          <Ingredient 
            key={index}
            name='Tomate'
            image=''
            selected={selected.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))} />
        ))*/}

        {ingredients.map((item) => (
          <Ingredient 
            key={item.id}
            name={item.name}
            image={`${services.storage.imagePath}/${item.image}`}
            selected={selected.includes(item.id)}
            onPress={() => handleToggleSelected(item.id)} />
        ))}

      </ScrollView>

      {selected.length > 0 && (
        <Selected 
          quatity={selected.length} 
          onClear={handleClearSelected} 
          onSearch={handleSearch}
        />
      )}

    </View>
  );
}
