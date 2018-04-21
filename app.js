$( document ).ready()
$("#search-button").on("click", function () {
   console.log("clicked");

   var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
   url += '?' + $.param({
       'api-key': "e3866efee9a243898373aaae91448eb1",
       'q': "black panther",
       'begin_date': "",
       'end_date': ""
   });
   $.ajax({
       url: url,
       method: 'GET',
   }).done(function (result) {
       console.log(result);
   }).fail(function (err) {
       throw err;
   })
});