import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  let flexContentDirection = "column";
  let textWidth = "100%";

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 150;
    flexContentDirection = "row";
    textWidth = "70%";
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  const contentStyle = {
    flexDirection: flexContentDirection,
  };

  const summaryStyle = {
    width: textWidth,
    alignSelf: "center",
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.contentContainer, contentStyle]}>
          <View style={[styles.imageContainer, imageStyle]}>
            <Image
              style={styles.image}
              source={require("../assets/images/success.png")}
            />
          </View>
          <View>
            <Text style={[styles.summaryText, summaryStyle]}>
              Your phone needed{" "}
              <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
              guess the number{" "}
              <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
          </View>
        </View>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
