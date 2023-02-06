import '../weather_response.dart';

abstract class WeatherResponseStatus {}
class Loading extends WeatherResponseStatus{}
class Success extends WeatherResponseStatus{
  WeatherResponse? weatherResponse;
  Success(this.weatherResponse);
}
class Failure extends WeatherResponseStatus{
  String? message;
  Failure(this.message);
}