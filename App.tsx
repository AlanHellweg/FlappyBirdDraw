import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { initAds, useAppTheme } from "@utils";
import { AppNavigation } from "@navigation";

function App(): React.JSX.Element {
  const theme = useAppTheme();

  useEffect(() => {
    initAds();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <AppNavigation />
    </NavigationContainer>
  );
}

export default App;
