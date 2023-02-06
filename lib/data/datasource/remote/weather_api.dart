import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:minia_day4/model/weather_response.dart';

class WeatherApi {
  //1- Single instance
  WeatherApi._();

  static final WeatherApi api = WeatherApi._();

  Future<WeatherResponse> fetchWeather(String city) async {
    //2- url
    String url =
        'https://api.openweathermap.org/data/2.5/weather?q=$city&appid=d5600cf96e0852733bddc5fa3aeac070';
    //3-call url after convert it to URI
    http.Response response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      //4- get body from response
      String data = response.body;
      //5-convert string to json
      var jsonData = jsonDecode(data);
      //6- convert json to dart model class
      return WeatherResponse.fromJson(jsonData);
    } else {
      throw Exception('Unable to fetch');
    }
  }
}
