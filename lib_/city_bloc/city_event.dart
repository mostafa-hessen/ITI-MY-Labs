abstract class CitySelectionEvent{}
class CitySelected extends CitySelectionEvent{
  String cityName;
  CitySelected(this.cityName);
}