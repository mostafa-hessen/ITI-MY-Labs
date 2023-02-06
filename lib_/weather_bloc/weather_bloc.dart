import 'package:bloc/bloc.dart';
import 'package:last/api.dart';
import 'package:last/weather_bloc/weather_event.dart';
import 'package:last/weather_bloc/weather_state.dart';
import 'package:last/weather_bloc/weather_status.dart';

import 'package:last/weather_response.dart';

class WeatherBloc extends Bloc<WeatherEvent, WeatherState> {
  WeatherBloc() : super(WeatherState(weatherResponseStatus: Loading())) {
    on<FetchWeather>((event, emit) => _fetchWeather(event));
  }

  _fetchWeather(FetchWeather event) async {
    try {
      emit(WeatherState(weatherResponseStatus: Loading()));
      WeatherResponse response = await WeatherApi.api.fetchWeather(event.citName);
      emit(WeatherState(weatherResponseStatus: Success(response)));
    } catch (e) {
      emit(WeatherState(weatherResponseStatus: Failure(e.toString())));
    }
  }
}
