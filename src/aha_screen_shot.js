var webshot = require("webshot");
var readline = require('readline');

var opt = {
  name: '',
  url: '',
  height: '',
  time: ''
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('请输入图片命名： ', (answer) => {
  opt.name = answer + '.jpg';
  
  rl.question('请输入需要截图的网址： ', (answer) => {
    opt.url = answer;
    
    rl.question('请输入截图高度： ', (answer) => {
      opt.height = parseInt(answer);
      
      rl.question('请输入等待时间(秒)： ', (answer) => {
        opt.time = parseInt(answer) * 1000;
        
        startScreenShot(opt);
        rl.close();
      });
    });
    
  });
  
});



function startScreenShot(opt) {
  var options = {
    screenSize: {
      width: 800
    , height: opt.height
    }
  , shotSize: {
      width: 800
    , height: 'all'
    }
  , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
      + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
  , quality: 300
  , renderDelay: opt.time
  , customCSS: '#page-content section p {font-size: 30px}'
  };
  console.log("开始截图，请稍候...");
  webshot(opt.url, opt.name, options, function(err) {
    if (err) {
      console.log("出现未知错误，请翻墙试试！");
    } else {
      console.log(opt.name + "存储完成，请查阅！");
    }
    
  });
}
