chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    let t = document.getElementsByClassName("testcase");
    let ss = "";
    consolog("test01");
      for(i=0;i<t.length;i++){
        let input_text = t[i].children[1].getElementsByClassName("testcase-text testcase-in")[0].innerHTML;
        let out_text = t[i].children[1].getElementsByClassName("testcase-text testcase-out")[0].innerHTML;
    
        // console.log(input_text);
        // console.log(out_text);
      //  console.log("Input");
      //  console.log(input_text);
      //  console.log("Expected output");
      //  console.log(out_text);
    
        // input_text = input_text.toString();
        // out_text = out_text.toString();
    
       ss = ss + "Input\r";
       ss = ss + input_text + "\r";
       ss = ss + "Expected output\r";
       ss = ss + out_text + "\r";
        console.log("test");
      }
    // chrome.runtime.sendMessage(
    //   { value: { contents: ss } }
    // );
    // console.log(ss);
    return;
  });