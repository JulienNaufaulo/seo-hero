Description
-----------
SEO Hero is a simple tool to scrape TOP 10 google search results on any keywords.

Requirements
-----------
This package only uses three dependencies to make it works :

 - *"Request"* to make http request
 - *"Cheerio"* to parse the HTML response
 - *"Q"* : to handle callback

Demo
----
This script is searching for the results about a keyword on the first page of google and return you an array about very result as an object with some properties (title, url and meta description).
For instance, if you're looking results for [seo hero](http://www.naufaulo.net) keyword, install this package and import it in a *search.js* file and then :

    var HeroScraper = require('./seo-hero');

    HeroScraper.scrap("seo hero", function (error, result) {
        console.log(result);
    });

This is going to return you an array of result objects ordered by ranking position (from the 1rst to the 10th) :


    [
        {
            title: 'Wix SEO Hero Challenge - Can You Outrank Them?',
            url: 'https://www.seroundtable.com/wix-seo-hero-challenge-23020.html',
            description: 'Nov 21, 2016 ... To combat that negative branding, Wix launched a contest where if you outrank \nthem         for the term [seo hero] in Google, they will give you...'
        },
        {
            title: 'Wix SEO Hero Contest | Support Center | Wix.com',
            url: 'https://www.wix.com/support/html5/article/wix-seo-hero-contest',
            description: 'We\'re going to create a new Wix site optimized with the search term “SEO Hero”. \nYou\'re invited to create your own site (you can use any platform). If your site...'
        },
        {
            ...
        }
    ]
