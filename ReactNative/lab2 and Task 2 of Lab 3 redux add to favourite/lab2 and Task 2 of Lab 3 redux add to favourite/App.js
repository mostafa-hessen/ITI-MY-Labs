 
import Home from './components/Home/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviDetaiels from './components/MoviDetaiels/MoviDetaiels'
import {View ,ScrollView} from 'react-native'
import FavPage from './components/FavPage/FavPage'
import ReactDOM from 'react-dom/client';
import {  Provider } from 'react-redux';
import {  createStore } from 'redux';
// import  {Reduceres}  from './redux/reducers/reducerGetUrl';
import  resducer from './components/redux/reducer'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 const store = createStore(resducer ,applyMiddleware(thunk))
export default function App() {
 

const Stack = createNativeStackNavigator();

  return (
<Provider store={store}>
 

       <NavigationContainer  >
        <Stack.Navigator >
             <Stack.Screen name="Home" component={Home}  />
             <Stack.Screen name="MoviDetaiels" component={MoviDetaiels} />
             <Stack.Screen name="FavPage" component={FavPage} />
        </Stack.Navigator >
    </NavigationContainer>
</Provider>


  );
}

 