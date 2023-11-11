import { View, Image } from "react-native";
import styles from "../../style/styles";

const ChatIcon = () => {
  return (
    <View>
      <Image
        style={styles.avatarSmall}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/message-app-b0e83.appspot.com/o/20171206_01.jpg?alt=media&token=284bff9a-2dd9-484f-a729-064377464b62&_gl=1*9zui8e*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5OTEwMzc3MS4yMi4xLjE2OTkxMDM4NTYuNTEuMC4w",
        }}
      />
    </View>
  );
};

export default ChatIcon;
