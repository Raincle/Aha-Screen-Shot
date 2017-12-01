var webshot = require("webshot");

var options = {
  screenSize: {
    width: 800
  , height: 15000
  }
, shotSize: {
    width: 800
  , height: 'all'
  }
, userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
    + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
, quality: 300
, renderDelay: 10000
, customCSS: '#page-content section p {font-size: 30px}'
};

webshot('http://mp.weixin.qq.com/s/cdp5ck1kvLAQDEOtdsLZRA', 'weixin_1.jpg', options, function(err) {
  // screenshot now saved to flickr.jpeg 
});
