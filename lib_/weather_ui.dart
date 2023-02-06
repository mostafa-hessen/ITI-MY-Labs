import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:last/city_bloc/city_bloc.dart';
import 'package:last/weather_bloc/weather_bloc.dart';
import 'package:last/weather_bloc/weather_event.dart';
import 'package:last/weather_bloc/weather_state.dart';
import 'package:last/weather_bloc/weather_status.dart';

class WeatherView extends StatelessWidget {
  const WeatherView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    (context).read<WeatherBloc>().add(FetchWeather('Cairo'));
    return BlocBuilder<WeatherBloc, WeatherState>(
      builder: (context, state) {
        var status = state.weatherResponseStatus;
        if (status is Success) {
          var weatherResponse = status.weatherResponse!;
          var weather = weatherResponse.weather![0];
          return Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.network(
                  'http://openweathermap.org/img/wn/${weather.icon}@2x.png'),
              Text('${weather.description}')
            ],
          );
        } else if (status is Failure) {
          var message = status.message!;
          return Text(
            message,
            style: TextStyle(color: Colors.red),
          );
        } else {
          return const CircularProgressIndicator();
        }
      },
    );
  }
}
