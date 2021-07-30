// 現在アクティブなタブにデータを送信
var sendToContents = function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 
            JSON.stringify({ contents: "test value from popup" }),
            function (response) {
            });
    });    
}

(function()
{
    chrome.browserAction.onClicked.addListener(sendToContents);
})();