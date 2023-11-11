import {
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import styles from "../style/styles";
import ChatIcon from "../components/chat/ChatIcon";
import ChatMessage from "../components/chat/ChatMessage";

const ChatScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({ headerShown: false });
    return () =>
      navigation.getParent()?.setOptions({
        headerShown: true,
      });
  }, [navigation]);

  const [text, setText] = useState("");

  const handleSend = () => {
    // Implement logic to handle sending the text
    console.log("Sending:", text);
    // Clear the text input
    setText("");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.viewChat} showsVerticalScrollIndicator={false}>
        {/* view of avatar and border chat */}
        <View style={styles.viewAvatarAndBorderChat}>
          {/* view for avatar user*/}
          <ChatIcon />
          <View>
            <ChatMessage />
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView style={styles.chatContainer}>
        <View style={styles.viewRow}>
          <TextInput
            style={styles.inputChatField}
            multiline
            placeholder="Type your message..."
            value={text}
            onChangeText={(newText) => setText(newText)}
            maxLength={200}
          />

          <TouchableOpacity
            style={{ marginHorizontal: 5 }}
            onPress={handleSend}
          >
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
