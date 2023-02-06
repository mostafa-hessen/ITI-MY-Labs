import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:last/city_bloc/city_bloc.dart';
import 'package:last/city_bloc/city_event.dart';
import 'package:last/city_ui.dart';
import 'package:last/weather_ui.dart';

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
          child: Column(mainAxisAlignment: MainAxisAlignment.center,
        children: const [
          CityView(),
          SizedBox(
            height: 120,
          ),
          WeatherView()
        ],
      )),
    );
  }
}
