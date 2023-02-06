class QuotesResponse {
  List<Results>? results;

  QuotesResponse({this.results});

  //Named Constructor
  QuotesResponse.fromJson(Map<String, dynamic> json) {
    if (json['results'] != null) {
      results = <Results>[];
      json['results'].forEach((v) {
        results!.add(Results.fromJson(v));
      });
    }
  }
}

class Results {
  String? sId;
  String? author;
  String? content;
  List<String>? tags;
  String? authorSlug;
  int? length;
  String? dateAdded;
  String? dateModified;

  Results(
      {this.sId,
        this.author,
        this.content,
        this.tags,
        this.authorSlug,
        this.length,
        this.dateAdded,
        this.dateModified});

  //Named Constructor
  Results.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    author = json['author'];
    content = json['content'];
    tags = json['tags'].cast<String>();
    authorSlug = json['authorSlug'];
    length = json['length'];
    dateAdded = json['dateAdded'];
    dateModified = json['dateModified'];
  }

  //Method
  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['_id'] = this.sId;
    data['author'] = this.author;
    data['content'] = this.content;
    data['tags'] = this.tags;
    data['authorSlug'] = this.authorSlug;
    data['length'] = this.length;
    data['dateAdded'] = this.dateAdded;
    data['dateModified'] = this.dateModified;
    return data;
  }
}
