import { Dimensions, StyleSheet } from "react-native";
import colors from "../../assets/color/color";

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: colors.background,
  },

  chatContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 10,
    backgroundColor: "white",
  },

  viewContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  viewCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  viewError: {
    alignSelf: "flex-start",
    marginLeft: 30,
  },

  viewLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  viewRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  viewChat: {
    display: "flex",
    flexDirection: "column",
  },

  viewAvatarAndBorderChat: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },

  text: {
    textAlign: "center",
    fontSize: 50,
    marginBottom: 10,
  },

  textError: {
    color: colors.red,
    textAlign: "left",
  },

  textInfo: {
    textAlign: "center",
    paddingTop: 5,
  },

  textButton: {
    fontSize: 18,
    color: colors.white,
  },

  textNav: {
    color: colors.secondary,
  },
  textCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    width: 320,
  },
  inputChatField: {
    borderWidth: 1,
    margin: 10,
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 5,
    width: 300,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    width: 200,
  },

  logo: {
    width: 130,
    height: 130,
  },

  userCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  avatarLarge: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  avatarMedium: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginLeft: 10,
  },

  avatarSmall: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },

  boxChat: {
    borderWidth: 1,
    borderBlockColor: "#111111",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 10,
  },
});

export default styles;
