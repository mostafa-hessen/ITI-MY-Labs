import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:minia_day4/model/quotes.dart';

class ApiService {
  ApiService._(); //private constructor
  static final ApiService api = ApiService._(); //single instance

  Future<QuotesResponse> fetchQuotes() async {
    String url = 'https://api.quotable.io/quotes';
    http.Response response = await http.get(Uri.parse(url));
    {
      if (response.statusCode == 200) {
        //get data
        String data = response.body;
        //convert string to json
        Map<String, dynamic> jsonData = jsonDecode(data);
        // convert json to model
        return QuotesResponse.fromJson(jsonData);
      } else {
        throw Exception('Unable to fetch weather');
      }
    }
  }
}
