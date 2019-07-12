import { createStackNavigator, createAppContainer } from "react-navigation"

// Pages
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import DetailSeason from "../pages/DetailSeason";

const AppNavigator = createStackNavigator({
    Home: HomePage,
    Detail: DetailPage,
    Season: DetailSeason
},{
    initialRouteName: 'Home',
    headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator)
  
export default AppContainer