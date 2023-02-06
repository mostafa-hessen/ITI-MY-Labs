abstract class WeatherEvent{}
class FetchWeather extends WeatherEvent{
  String citName;
  FetchWeather(this.citName);
}