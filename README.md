# expo-audio `replace(null)` reproduction

Minimal reproduction of the mismatch between the public TypeScript API for
`AudioPlayer.replace()` and its native Android and iOS signatures.

<img width="389" height="861" alt="image" src="https://github.com/user-attachments/assets/e2f165dd-da70-42f1-a4b5-a0e3d4a08ba1" />
<img width="377" height="822" alt="image" src="https://github.com/user-attachments/assets/88e4846b-aac8-42dd-9fe1-682e599f9984" />

<details open>
  <summary>Android stacktrace</summary>

  ### Android

  ```text
ERROR  [Error: Call to function 'AudioPlayer.replace' has been rejected.
→ Caused by: The 2nd argument cannot be cast to type class expo.modules.audio.AudioSource (received null)
→ Caused by: Cannot assigned null to not nullable type.] 

Code: index.tsx
   9 |       <Pressable
  10 |         accessibilityRole="button"
> 11 |         onPress={() => player.replace(null)}
     |                                      ^
  12 |         style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
  13 |         <Text style={styles.buttonText}>Call player.replace(null)</Text>
  14 |       </Pressable>
Call Stack
  Pressable.props.onPress (src/app/index.tsx:11:38)
  ```
</details>

<details open>
  <summary>iOS stacktrace</summary>

  ### iOS

  ```text
ERROR  [Error: FunctionCallException: Calling the 'replace' function has failed (at ExpoModulesCore/SyncFunctionDefinition.swift:94)
→ Caused by: ArgumentCastException: The 1st argument cannot be cast to type AudioSource (at ExpoModulesCore/SyncFunctionDefinition.swift:166)
→ Caused by: The operation couldn’t be completed. (ExpoModulesJSI.JavaScriptValue.TypeError error 1.)] 

Code: index.tsx
   9 |       <Pressable
  10 |         accessibilityRole="button"
> 11 |         onPress={() => player.replace(null)}
     |                                      ^
  12 |         style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
  13 |         <Text style={styles.buttonText}>Call player.replace(null)</Text>
  14 |       </Pressable>
Call Stack
  Pressable.props.onPress (src/app/index.tsx:11:38)
  ```
</details>

## Versions

- Expo SDK: `57.0.8`
- `expo-audio`: `57.0.3`
- React Native: `0.86.0`

## Run

```bash
npm install
npx expo start
```

Open the project in Expo Go or a development build on Android or iOS.

## Reproduction steps

1. Open the app.
2. Press **Call player.replace(null)**.