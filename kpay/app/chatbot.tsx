// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';

// // Language-specific data
// const languageData = {
//   en: {
//     welcome: 'Hello! I can help you with crop information and diseases. Type a crop name or ask about diseases.',
//     selectLang: 'Please select your language:',
//     noInfo: 'I can provide information about crops like wheat, rice, etc. Please ask about a specific crop or its diseases!',
//     diseasesLabel: 'Diseases affecting',
//   },
//   es: {
//     welcome: '¡Hola! Puedo ayudarte con información sobre cultivos y enfermedades. Escribe el nombre de un cultivo o pregunta sobre enfermedades.',
//     selectLang: 'Por favor, selecciona tu idioma:',
//     noInfo: 'Puedo proporcionar información sobre cultivos como trigo, arroz, etc. ¡Por favor pregunta sobre un cultivo específico o sus enfermedades!',
//     diseasesLabel: 'Enfermedades que afectan a',
//   },
// };

// // Sample crop data
// const cropData = {
//   wheat: {
//     en: {
//       info: 'Wheat is a cereal grain and one of the most important staple crops globally.',
//       diseases: [
//         { name: 'Rust', symptoms: 'Orange-brown stripes on leaves', treatment: 'Apply fungicides' },
//       ],
//     },
//     es: {
//       info: 'El trigo es un grano cereal y uno de los cultivos básicos más importantes a nivel mundial.',
//       diseases: [
//         { name: 'Roya', symptoms: 'Rayas marrón-anaranjadas en las hojas', treatment: 'Aplicar fungicidas' },
//       ],
//     },
//   },
// };

// const App = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');
//   const [selectedLanguage, setSelectedLanguage] = useState(null);

//   useEffect(() => {
//     setMessages([
//       {
//         id: '1',
//         text: 'Please select your language:\n1. English (en)\n2. Español (es)',
//         isBot: true,
//       },
//     ]);
//   }, []);

//   const handleSend = () => {
//     if (!inputText.trim()) return;
//     const userMessage = { id: Date.now().toString(), text: inputText, isBot: false };
//     setMessages((prev) => [...prev, userMessage]);

//     if (!selectedLanguage) {
//       const langMap = { '1': 'en', en: 'en', '2': 'es', es: 'es' };
//       const lang = langMap[inputText.toLowerCase()];
//       if (lang) {
//         setSelectedLanguage(lang);
//         setMessages((prev) => [...prev, { id: Date.now().toString(), text: languageData[lang].welcome, isBot: true }]);
//       } else {
//         setMessages((prev) => [...prev, { id: Date.now().toString(), text: 'Invalid choice, please enter 1 or 2.', isBot: true }]);
//       }
//     } else {
//       const response = processMessage(inputText.toLowerCase(), selectedLanguage);
//       setMessages((prev) => [...prev, { id: Date.now().toString(), text: response, isBot: true }]);
//     }
//     setInputText('');
//   };

//   const processMessage = (message, lang) => {
//     for (const crop in cropData) {
//       if (message.includes(crop)) {
//         return cropData[crop][lang]?.info || languageData[lang].noInfo;
//       }
//     }
//     return languageData[lang].noInfo;
//   };

//   return (
//     <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Crop Info Bot</Text>
//       </View>
//       <FlatList
//         data={messages}
//         renderItem={({ item }) => (
//           <View style={[styles.messageBubble, item.isBot ? styles.botMessage : styles.userMessage]}>
//             <Text style={styles.messageText}>{item.text}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         style={styles.messageList}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={inputText}
//           onChangeText={setInputText}
//           placeholder={selectedLanguage ? 'Type your question...' : 'Enter 1 or 2'}
//           onSubmitEditing={handleSend}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f5f5f5' },
//   header: { backgroundColor: '#4CAF50', padding: 15, alignItems: 'center' },
//   headerText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
//   messageList: { flex: 1, padding: 10 },
//   messageBubble: { padding: 10, borderRadius: 10, marginVertical: 5, maxWidth: '80%' },
//   botMessage: { backgroundColor: '#fff', alignSelf: 'flex-start' },
//   userMessage: { backgroundColor: '#4CAF50', alignSelf: 'flex-end' },
//   messageText: { color: '#000' },
//   inputContainer: { flexDirection: 'row', padding: 10, backgroundColor: '#fff' },
//   input: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 20, padding: 10, marginRight: 10 },
//   sendButton: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 20, justifyContent: 'center' },
//   sendButtonText: { color: 'white', fontWeight: 'bold' },
// });

// export default App;
