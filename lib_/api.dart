import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:http/http.dart';
import 'package:last/weather_response.dart';

class WeatherApi {
  WeatherApi._();

  static final WeatherApi api = WeatherApi._();

  Future<WeatherResponse> fetchWeather(String city) async {
    String url =
        'https://api.openweathermap.org/data/2.5/weather?q=$city&appid=d5600cf96e0852733bddc5fa3aeac070';
    Response response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      return WeatherResponse.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Unable to fetch weather');
    }
  }
}
