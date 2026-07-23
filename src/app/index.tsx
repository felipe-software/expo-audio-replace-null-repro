import { useAudioPlayer } from 'expo-audio';
import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  const player = useAudioPlayer(null);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        accessibilityRole="button"
        onPress={() => player.replace(null)}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.buttonText}>Call player.replace(null)</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f4f4f0',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ad3127',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
