import { SafeAreaView, Text, View, StyleSheet} from 'react-native';
import TodoScreen from './src/TodoScreen';

export default function App() {
  return (
    <SafeAreaView>
    <View> 
      <TodoScreen/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
