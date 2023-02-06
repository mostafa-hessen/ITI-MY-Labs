import 'package:bloc/bloc.dart';
import 'package:minia_day4/bloc/counter_event.dart';

class CounterBloc extends Bloc<CounterEvent,int>{
  CounterBloc():super(0){
    on<Increment>((event, emit) => emit(state+1));
  }
}