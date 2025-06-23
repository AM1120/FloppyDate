// import React, { useEffect } from 'react';
// import { View, Button, Text } from 'react-native';
// import * as Google from 'expo-auth-session/providers/google';
// import * as WebBrowser from 'expo-web-browser';
// import { useNavigation } from '@react-navigation/native';


// WebBrowser.maybeCompleteAuthSession();

// export default function Login() {
//   const navigation = useNavigation();
//   const [request, response, promptAsync] = Google.useAuthRequest({
//     androidClientId: 'TU_CLIENT_ID.apps.googleusercontent.com',
//   });

//   useEffect(() => {
//     if (response?.type === 'success') {
//       const { authentication } = response;
//       console.log('Token:', authentication.accessToken);
//       navigation.replace('Home'); // Redirige al home después del login
//     }
//   }, [response]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Inicia sesión con tu cuenta de Google</Text>
//       <Button
//         disabled={!request}
//         title="Login con Google"
//         onPress={() => promptAsync()}
//       />
//     </View>
//   );
// }
