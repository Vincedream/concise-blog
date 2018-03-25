export function setCookie(key, value) {
  var Days = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = key + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

export function getCookie(name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}

export function clearCookie(name) {  
    var exp = new Date();  
    exp.setTime(exp.getTime() - 1);  
    var cval=getCookie(name);  
    if(cval!=null)  
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();  
}