import 'package:flutter/material.dart';
import 'package:minia_day4/model/quotes.dart';

import '../data/datasource/remote/api.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: FutureBuilder<QuotesResponse>(
      future: ApiService.api.fetchQuotes(),
      builder: ((context, snapshot) {
        if (snapshot.hasData) {
          var response = snapshot.data!;
          var list = response.results!;
          return ListView.separated(
            separatorBuilder: (context, index) => const Divider(),
            itemCount: list.length,
            itemBuilder: (context, index) {
              String tages = list[index].tags!.map((e) => '#$e').join(' ');
              return ListTile(
                title: Text(list[index].content!),
                subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(list[index].author!),
                      const SizedBox(
                        height: 16,
                      ),
                      Text(
                        tages,
                        style: const TextStyle(color: Colors.indigo),
                      ),
                    ]),
                leading: Container(alignment: Alignment.center,
                  width: 50,
                  height: 50,
                  decoration: BoxDecoration(
                      shape: BoxShape.circle, color: Colors.deepPurple[200]),
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      list[index].content![0].toUpperCase(),
                      style: const TextStyle(color: Colors.deepPurple,fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              );
            },
          );
        } else if (snapshot.hasError) {
          var error = snapshot.error!;
          return Center(
            child: Text(
              error.toString(),
              style: const TextStyle(color: Colors.red),
            ),
          );
        } else {
          return const Center(
            child: CircularProgressIndicator(),
          );
        }
      }),
    ));
  }
}
