// Home.tsx
import { View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/AppNavigation/types";
import { AdBanner, Button, Card, Container, Text } from "@components";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const newGame = () => {
    navigation.navigate("game");
  };

  const goToConfig = () => {
    navigation.navigate("config");
  };

  return (
    <Container style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.contTitle}>
          <Text variant="h2" color="text" style={styles.title}>
            Flappy Bird Draw
          </Text>
        </View>
        <View style={styles.contButton}>
          <Button variant="contained" onPress={newGame}>
            Nuevo Juego
          </Button>
          <Button variant="contained" onPress={goToConfig}>
            Configuracion
          </Button>
        </View>
      </Card>
      <Text variant="small" align="center" style={styles.copyright}>
        Creado por Alan
      </Text>
      <AdBanner />
    </Container>
  );
};

export default Home;
