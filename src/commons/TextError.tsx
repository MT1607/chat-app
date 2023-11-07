import { View, Text } from "react-native";
import styles from "../style/styles";

const TextError = ({ message }: { message: string }) => {
  return (
    <View style={styles.viewError}>
      <Text style={styles.textError}>{message}</Text>
    </View>
  );
};

export default TextError;
