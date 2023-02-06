import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:minia_day4/bloc/counter_bloc.dart';
import 'package:minia_day4/bloc/counter_event.dart';
import 'package:provider/provider.dart';

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children:  [
              const Text('Push the button'),
              BlocBuilder<CounterBloc,int>(builder: (context, state) =>Text(
                '$state',
                style: const TextStyle(fontSize: 30),
              ),)
            ]),
      ),
      floatingActionButton:
          FloatingActionButton(onPressed: () {
            //use object counter bloc
            //   CounterBloc counterBloc = Provider.of<CounterBloc>(context,listen: false);
            CounterBloc counterBloc = (context).read();
            //add event
            counterBloc.add(Increment());
          }, child: const Icon(Icons.add)),
    );
  }
}
