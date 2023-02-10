 
import {View } from 'react-native'
 
const intialState2 = {
  favoriteGames:{k:"mk"}
};

export  default function GetFavourit (state = intialState2, action)  {
  switch (action.type) {
    case "GET-FromLocalSorage":
      return { ...state, favoriteGames: action.payload };
      
    default:
      return state;
  }}