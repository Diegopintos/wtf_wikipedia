const wtf_wikipedia = require('./src/index')
// wtf_wikipedia.from_api("Whistler", function(s){console.log(wtf_wikipedia.parse(s))})//disambig
// wtf_wikipedia.from_api("Toronto", 'tr', function(s){console.log(wtf_wikipedia.parse(s)) })
// wtf_wikipedia.from_api("Tomb_Raider_(2013_video_game)", 'en', function(s) {
//   console.log(wtf_wikipedia.parse(s).infobox)
// })

// wtf_wikipedia.from_api("On A Friday", function(page) {
//   var parsed = wtf_wikipedia.parse(page); // causes the crash
//   console.log(parsed);
// });

// var s = "Each year, however, there are a few days where the temperature rises above 32 C. Some years have even witnessed long periods of harsh summer weather, such as the [[2003 European heat wave for weeks, surged up to 40 °C}} on some days and seldom cooled down at night.{{sfn"

// function from_file(page){
//   var str = require("fs").readFileSync(__dirname+"/tests/cache/"+page+".txt", 'utf-8')
//   console.log(wtf_wikipedia.plaintext(str))
//   console.log(JSON.stringify(wtf_wikipedia.parse(str), null, 2));
// }

// from_file("list")
// from_file("Toronto")
// from_file("Toronto_Star")
// from_file("Royal_Cinema")
// from_file("Jodie_Emery")
// from_file("Redirect")
// from_file("Africaans")
// from_file("Anarchism")

// wtf_wikipedia.from_api("Transportation in the Philippines", "en", function (s) {
//   console.log(JSON.stringify(wtf_wikipedia.parse(s), null, 2))
// })
// console.log(wtf_wikipedia.parse("Jeb bush is a president. {{nowrap|{{small|(1995–present)}}}} He lives in Texas.").text)
// console.log(wtf_wikipedia.parse("Jeb bush is a president. {{WikiProject ...}} He lives in Texas.").text)

wtf_wikipedia.from_api('Toronto', 'fr', function(markup) {
  var obj = wtf_wikipedia.parse(markup);
  console.log(obj.infobox);
})

// wtf_wikipedia.from_api('Toronto', 'fr', function(markup) {
//   var obj = wtf_wikipedia.parse(markup);
//   console.log(obj.infobox);
// })
