import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:last/weather_bloc/weather_bloc.dart';
import 'package:last/weather_bloc/weather_event.dart';

import 'city_bloc/city_bloc.dart';
import 'city_bloc/city_event.dart';

class CityView extends StatelessWidget {
  const CityView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<CityBloc, String>(
        builder: (context, state) => DropdownButton<String>(
              value: state,
              items: const [
                DropdownMenuItem(
                  value: 'Cairo',
                  child: Text('Cairo'),
                ),
                DropdownMenuItem(
                  value: 'London',
                  child: Text('London'),
                ),
              ],
              onChanged: (value) {
                (context).read<CityBloc>().add(CitySelected(value!));
                (context).read<WeatherBloc>().add(FetchWeather(value));

              },
            ));
  }
}
