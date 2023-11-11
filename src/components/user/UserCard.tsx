import { View, Image, TouchableOpacity, Text } from "react-native";

import formatDay from "../../utils/formatDay";
import styles from "../../style/styles";

const UserCard = ({ navigation }: { navigation: any }) => {
  const dayFormat = formatDay();

  return (
    <TouchableOpacity
      style={{ marginBottom: 15 }}
      onPress={() => navigation.push("Chat")}
    >
      <View style={styles.userCard}>
        {/* view image */}
        <View>
          <Image
            style={styles.avatarLarge}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/message-app-b0e83.appspot.com/o/20171206_01.jpg?alt=media&token=284bff9a-2dd9-484f-a729-064377464b62&_gl=1*9zui8e*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5OTEwMzc3MS4yMi4xLjE2OTkxMDM4NTYuNTEuMC4w",
            }}
          />
        </View>
        {/* view information */}
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text numberOfLines={1} ellipsizeMode="tail">
            Name
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Text>
            <Text> - {dayFormat}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
