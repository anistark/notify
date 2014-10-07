var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

// For flights only
pageMod.PageMod({
  include: "http://flights.makemytrip.com/*",
  contentScriptFile: [data.url("jquery-1.7.min.js"), data.url("flight.js")]
});

// For Flights + Hotels
pageMod.PageMod({
  include: "http://fph.makemytrip.com/*",
  contentScriptFile: [data.url("jquery-1.7.min.js"), data.url("flighthotel.js")]
});

