import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:last/city_bloc/city_bloc.dart';
import 'package:last/weather_bloc/weather_bloc.dart';

import 'home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MultiBlocProvider(
        providers: [
          BlocProvider(
            create: (context) => CityBloc(),
          ),
          BlocProvider(
            create: (context) => WeatherBloc(),
          ),
        ],
        child: const MyHomePage(),
      ),
    );
  }
}
