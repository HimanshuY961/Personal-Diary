
import { Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text style={{ fontSize:22 }}>Secure Diary (Google Drive)</Text>
      <Button title="Sign in with Google" onPress={() => alert('Google Sign-In placeholder')} />
    </View>
  );
}
