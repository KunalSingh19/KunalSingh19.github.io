<script>
//some default pre init
var PB = PB || {};PB.q = PB.q || [];PB.events = PB.events || [];

//PushBots ApplicationId (required)
PB.app_id = "60c4af03b9865a2d39512844";
//Your domain name, must be HTTPS or localhost  (required)
PB.domain = "WEBSITE_URL";
//Update and uncomment it if you are using custom safari certificate for your app
PB.safari_push_id = "web.com.pushbots.safaripush";
//****************************************

PB.logging_enabled = true;
PB.auto_subscribe = true;

//Custom worker and manifest URL
//PB.worker_url = PB.domain + "/pushbots-worker.js";

//Welcome notification message
PB.welcome = {title:"Welcome ",message:"Thanks for subscribing!", url :PB.domain};

function sendNotification(){
      PB.register();
      PB.q.push(["sendNotification", {title:"Hey ",message:"Why not?", url :"WEBSITE_URL"}]);
}

</script>

<script src="//cdn.pushbots.com/js/sdk.min.js" type="text/javascript" onload="PB.init()" async></script>
1. Install PushBots from the WordPress.org plugin directory or by uploading the PushBots plugin folder to your wp-content/plugins directory.

2. Activate PushBots plugin from your WordPress settings dashboard.XCode gif
3. Copy your app ID and secret and paste it in the required fields.XCode gif4. That's all! Next time you have a new post you will see send notifications check box.XCode gif

1. Login into your Google Tag Manager account.

2. Install it to your website if you didn't already, click on Admin, then Install Google Tag Manager and follow instructions:

XCode gif

3. Click on workspace, then click on new tag to add pushbots tag:

XCode gif

Now name the tag PushBots, then click on tag configuration:

XCode gif
4. Select custom HTML, then paste Pushbots code:
<script>
//some default pre init
var PB = PB || {};PB.q = PB.q || [];PB.events = PB.events || [];

//PushBots ApplicationId (required)
PB.app_id = "60c4af03b9865a2d39512844";
//Your domain name, must be HTTPS or localhost  (required)
PB.domain = "WEBSITE_URL";
//Update and uncomment it if you are using custom safari certificate for your app
PB.safari_push_id = "web.com.pushbots.safaripush";
//****************************************

PB.logging_enabled = true;
PB.auto_subscribe = true;

//Custom worker and manifest URL
//PB.worker_url = PB.domain + "/pushbots-worker.js";

//Welcome notification message
PB.welcome = {title:"Welcome ",message:"Thanks for subscribing!", url :PB.domain};

function sendNotification(){
      PB.register();
      PB.q.push(["sendNotification", {title:"Hey ",message:"Why not?", url :"WEBSITE_URL"}]);
}
window.addEventListener('load', function(event) {PB.init();});
</script>

<script src="//cdn.pushbots.com/js/sdk.min.js" type="text/javascript"></script>
