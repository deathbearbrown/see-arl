require.config({ paths: { "jquery": "http://code.jquery.com/jquery" } });
define(function(require) {
  var $ = require("jquery").noConflict();

  return function(elem) {
    var $elem = $(elem);
    var videoUrl = "https://vine.co/v/OqxM2EZwEBg/embed/simple?audio=1";
    var $iframe = $('<iframe></iframe>');
    $iframe.attr('src', videoUrl);
    $elem.append($iframe);
    return new Promise(setTimeout);
	};
});
