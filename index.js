var request = require('request');
var cheerio = require('cheerio');
var Q = require('q');

module.exports = {
    scrap: function(input_keyword, callback) {
        var keyword = input_keyword.replace(" ", "+");
        var google_url = "https://www.google.com/search?q="+keyword+"&sa=G&hl=en&pws=0&gbv=1&gws_rd=cr&ei=Pl5WWNqaCJ3swALRhpeYCw";
        var results = [];
        var deferred = Q.defer();

        request = request.defaults({jar: true}); // Remember cookies

        var options = {
            url: "http://www.google.com/ncr",
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16'
            }
        };

        request(options, function () {
            request(google_url, function (error, response, body) {
                var $ = cheerio.load(body);

                $("div.g").each(function() {
                    var title = $(this).children('h3.r').text();
                    var page_url = $(this).children('div.s').children('div.kv').children('cite').text();
                    var description = $(this).children('div.s').children('span.st').text();

                    if (page_url != "") {
                        results.push({
                            title: title,
                            url: page_url,
                            description: description,
                        });
                    }
                });

                if(results.length > 0) {
                    deferred.resolve(results);
                } else {
                    deferred.reject("No results");
                }

                deferred.promise.nodeify(callback);
                return deferred.promise;
            });
        });
    }
};
