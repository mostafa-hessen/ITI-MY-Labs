
import 'package:last/weather_bloc/weather_status.dart';

class WeatherState{
  WeatherResponseStatus? weatherResponseStatus;
  int? code;

  WeatherState({required this.weatherResponseStatus,this.code});
}