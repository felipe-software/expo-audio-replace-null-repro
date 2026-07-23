# expo-audio `replace(null)` reproduction

Minimal reproduction of the mismatch between the public TypeScript API for
`AudioPlayer.replace()` and its native Android and iOS signatures.

<img width="389" height="861" alt="image" src="https://github.com/user-attachments/assets/e2f165dd-da70-42f1-a4b5-a0e3d4a08ba1" />

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

The single screen runs:

```ts
const player = useAudioPlayer(null);
player.replace(null);
```

No type cast or TypeScript suppression is used.

## Expected result

The TypeScript and native contracts agree about whether `null` is accepted. Since
the TypeScript `AudioSource` type includes `null`, calling `replace(null)` should
either be supported consistently or rejected during type checking.

## Actual result

The project compiles, but Android and iOS reject `null` at the native bridge:

```text
Error: Call to function 'AudioPlayer.replace' has been rejected.
→ Caused by: The 2nd argument cannot be cast to type expo.modules.audio.AudioSource (received null)
→ Caused by: Cannot assigned null to not nullable type.
```

## Relevant history

- [expo/expo#33854 — Accept null source in audio player](https://github.com/expo/expo/pull/33854)
- [expo/expo#33708 — Fix issues with `replace` method](https://github.com/expo/expo/pull/33708)
