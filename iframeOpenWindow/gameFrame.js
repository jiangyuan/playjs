function checkReiger() {
    var code = $("#code").val();
    if(code.length > 20 || code.length <3 || !(/^[a-z_][a-z_0-9]*$/i.test(code)))
    {
        alert("4-20个字符，须以字母打头");
        return false;
    }
    var pwd = $("#password").val();
    if(!(/^[A-Za-z0-9_]{6,20}$/.test(pwd)))
    {
        alert("密码不合法");
        return false;
    }
    var repeat = $("#password2").val();
    if(repeat != pwd)
    {
        alert("两次密码不一致");
        return false;
    }
    $("#password").val(hex_md5(pwd));
    return true;
};


function checkName() {
    $("#subbtn").attr("disabled",true);
    var code = $("#code").val();
    if(code.length > 20 || code.length <3 || !(/^[a-z_][a-z_0-9]*$/i.test(code)))
    {
        $("#div_code").attr("className","warn");
        $("#em_code").html("4-20个字符，须以字母打头");
        setTimeout('$("#code").focus()',50);
        return false;
    }
    $.post("../register/",{'op' : 'checkName', 'name' : code},function(data) {
        if(data == "1")
        {
            $("#div_code").attr("className","suc");
            $("#em_code").html("&nbsp;");
            $("#subbtn").attr("disabled",false);
        }
        else if(data == "-3")
        {
            $("#code").focus();
            $("#div_code").attr("className","warn");
            $("#em_code").html("用户名已被注册");
        }
        else
        {
            $("#code").focus();
            $("#div_code").attr("className","warn");
            $("#em_code").html("用户名禁止注册");
        }

    });
} 

function checkPwd(pwd) {
    if (pwd.match(/^[A-Za-z0-9_]{6,20}$/g)) {
        $("#div_pwd").attr("className", "suc");
        $("#pwd").html("&nbsp;");
    } else {
        $("#div_pwd").attr("className", "warn");
        $("#pwd").html("6-20位");
    }
}

function checkRepeat(pwd) {
    if(!pwd) {
        $("#div_repwd").attr("className", "warn");
        $("#repeat").html("重复密码不能为空");
    } else if (pwd == $("#password").val()) {
        $("#div_repwd").attr("className", "suc");
        $("#repeat").html("&nbsp;");
        $('#subbtn').focus();
    } else {
        $("#div_repwd").attr("className", "warn");
        $("#repeat").html("密码不一致");
    }
}


var t = null;
function mysubmit() {
    $("#submitbt").hide();
    $("#wait").show();
    $("#myform").ajaxSubmit( {
        url : '../register_noautonumemail' + window.location.search.replace(/["&"|"="|"\?"]/g,"/") +'/',
        async:false,
        success : function(data) {
            data = eval('('+data+')');
            if(data['login'] == "1") {
                if(data['script']) {
                    var t = data['script'].match(/https?:\/\/[^\"]*/g);
                    if(t)for(var i=0; i< t.length;i++) show(t[i]);
                }
                if(data['iframe']) {
                    $("#ifm").html(data['iframe']);
                }
                var _href = $('#serverlist .login a').attr('href');
                window.open(_href);
                $('#serverlist .login a').trigger('click');
            } else {
                alert(data['notice']);
                $("#password2").val('');
                $("#password").val('');
                $("#wait").hide();
                $("#submitbt").show();
            }
        }
    });
}

function show(str) {
    var elm = document.createElement("script");
    elm.type = "text/javascript";
    elm.src = str;
    document.getElementsByTagName('head')[0].appendChild(elm);
}
