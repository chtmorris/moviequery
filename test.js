// Generated by CoffeeScript 1.7.1
(function() {
  "use strict";
  $(function() {
    return $("form").on("submit", function(event) {
      var searchTerm;
      event.preventDefault();
      searchTerm = $("input").val();
      return $.ajax({
        url: "http://www.omdbapi.com/",
        method: "get",
        data: {
          s: searchTerm
        },
        dataType: "json"
      });
    });
  });

}).call(this);
