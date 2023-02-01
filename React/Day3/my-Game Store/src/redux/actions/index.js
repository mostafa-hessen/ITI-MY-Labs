//  import {axiosInstance} from "../../API/API"

// import axios from "axios";
import { axiosInstance } from "../../API/API";//https://api.rawg.io/api/

export const getUrlData = (eNum,searched) =>   (dispatch) => {
   return   axiosInstance.get(
      searched=='' ?  `games?key=4efadf7d35904a19996995e218e37c5a&dates=2020-09-01,2022-09-30&page_size=15&page=${eNum}`:
      `games?key=4efadf7d35904a19996995e218e37c5a&dates=2020-09-01,2022-09-30&page_size=15&search=${searched}`
      )
      .then((data) => {
         dispatch({ type: "GET-DATA", payload: data.data.results });
      });
  };


  export const SearchedValue = (e) =>   (dispatch) => {
    
         dispatch({ type: "SEARCH-VALUE", payload:e});
       
  };
//   export const GetSearched = (searched) =>   (dispatch) => {
//    return   axiosInstance.get(
//         `games?key=4efadf7d35904a19996995e218e37c5a&dates=2020-09-01,2022-09-30&page_size=15&search=${searched}`
//       )
//       .then((data) => {
//          dispatch({ type: "SEARCH-DATA", payload: data.data.results });
//       });
//   };


  // ?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&page=${number}
