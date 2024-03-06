import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Animated, { BounceOut, SlideInDown } from "react-native-reanimated";

import { styles } from './styles'
import { theme } from "@/theme";

import { Button } from "@/components/Button";

type Props = {
  quatity: number
  onClear: () => void
  onSearch: () => void
}

export function Selected({ quatity, onClear, onSearch }: Props ) {
  return (
    <Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOut.duration(1000)}>
      <View style={styles.header}>
        <Text style={styles.label}>{quatity} ingredientes selecionados</Text>
        <MaterialIcons 
          name="close" 
          size={24} 
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>
      
      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  );
}