window.reg_url    = 'http://user.game2.cn/register/ws_232.htm?from=810580&afrom=810580'+window.location.search.replace(/\?/, '&');
window.cnzz_url   = 'http://s6.cnzz.com/z_stat.php?id=1000399144';
window.pre_img    = 'http://images.dsd333.cn/wanshi105-shirws0417/pic_17.png';
window.statis_url = 'http://user.game2.cn/statistics.php?afrom=810580'+window.location.search.replace(/\?/, '&') + '&from=810580';
window.status =  "好游戏，找哥们！ ---- 哥们网  www.game2.cn。";
window.retain_msg = "";

window.onload = function()
{   
    if(navigator.userAgent.indexOf("MSIE")>0){
          document.getElementById("swf").focus();
    }
    if(navigator.userAgent.indexOf("Firefox")>0){
          document.getElementById("game").focus();
    }
    if(navigator.userAgent.indexOf("Chrome")>0){
          document.getElementById("game").tabIndex = 0;
          document.getElementById("game").focus();
    }
}

var flashDiv = document.getElementById('swf');

function openInnerFrame(frameUrl,frameWidth,frameHeight,top,left) {
    var frameDiv = document.getElementById('innerPopIframe');
    if(frameDiv) {
        frameDiv.firstChild.src = frameUrl;
        frameDiv.firstChild.width = frameWidth;
        frameDiv.firstChild.height = frameHeight;
        var marginLeft = -frameWidth/2;
        frameDiv.style.cssText = "position:absolute; top:"+top+"px;left:"+left+"%;margin-left:" + marginLeft + "px;width:"+frameWidth+"px;height:"+frameHeight+"px;display:block;";
    }
}

function closeInnerFrame() {
    var frameDiv = document.getElementById('innerPopIframe');
    frameDiv.firstChild.src = "";
    frameDiv.style.cssText = "display:none;";
}

function callActionScriptFunc(funcName) {
    var fName = funcName.toString();
    thisMovie("mymovie")[fName]();
}

function thisMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName+'_ob'];
    } else {
        return document[movieName+'_em'];
    }
}

function closeifm() {
    document.getElementById('area').style.zIndex = 0;
    document.getElementById('frame').style.display = 'none';
}
