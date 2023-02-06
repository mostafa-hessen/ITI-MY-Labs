import 'package:flutter/material.dart';
import 'package:minia_day4/data/datasource/remote/weather_api.dart';
import 'package:minia_day4/model/weather_response.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _selectedCity = 'Cairo';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.deepPurple,
      body: SafeArea(
        child: Center(
            child: Column(
          children: [
            DropdownButton<String>(value: _selectedCity,
              items: const [
                DropdownMenuItem(
                  child: Text('Cairo'),
                  value: 'Cairo',
                ),
                DropdownMenuItem(
                  child: Text('London'),
                  value: 'London',
                ),
              ],
              onChanged: (value) {
                setState(() {
                  _selectedCity = value!;
                });
              },
            ),
            SizedBox(height: 200,),
            FutureBuilder<WeatherResponse>(
              future: WeatherApi.api.fetchWeather(_selectedCity),
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  var list = snapshot.data!.weather!;
                  var name = snapshot.data!.name!;
                  var temp = snapshot.data!.main!.temp!;
                  return Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(name),
                        Image.network(
                            'http://openweathermap.org/img/wn/${list[0].icon}@2x.png'),
                        Text('$temp'),
                        Text(list[0].description!),
                      ]);
                } else if (snapshot.hasError) {
                  return Text(
                    snapshot.error.toString(),
                    style: const TextStyle(color: Colors.red),
                  );
                } else {
                  return const CircularProgressIndicator();
                }
              },
            ),
          ],
        )),
      ),
    );
  }
}
