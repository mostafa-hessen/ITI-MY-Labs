import 'package:flutter/material.dart';
import 'package:minia_day4/provider/counter.dart';
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
            children: [
              const Text('Push the button'),
              Consumer<Counter>(
                  builder: (context, counter, child) => Text(
                        '${counter.count}',
                        style: const TextStyle(fontSize: 30),
                      )),
            ],
          )),
          floatingActionButton: FloatingActionButton(
            onPressed: () {
              Counter counter = Provider.of(context, listen: false);
              counter.increment();
            },
            child: const Icon(Icons.add),
          ),
        );
  }
}
