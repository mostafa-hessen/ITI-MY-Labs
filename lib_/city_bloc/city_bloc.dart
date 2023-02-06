import 'package:bloc/bloc.dart';
import 'package:last/city_bloc/city_event.dart';

class CityBloc extends Bloc<CitySelectionEvent,String>{
  CityBloc():super('Cairo'){
    on<CitySelected>((event, emit) => _onCitySelected(event));
  }

  _onCitySelected(CitySelected event) {
    emit(event.cityName);
  }
}