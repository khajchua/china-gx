/*
powered by  wang qi . co m
author:rzj,miluduo
wangqi rainblow service center

v20110922
*/

if($.browser.msie){
	var iever=$.browser.version
}


$(document).ready(function() {

//tips

$("span[id^=tips]").html("<img src='/style/images/tips.png' align='absmiddle' alt='' />&nbsp;").addClass("tips").hover(function(){
	$(this).css("z-index", "98").append("<div class=tips1>◆</div>").append("<div class=tips2>◆</div>").append("<p></p>");
	$(this).find("p").html($(this).attr("help"));
	},function(){
	$(this).css("z-index", "0");
	$(this).html("<img src='/style/images/tips.png' alt='' />&nbsp;");
});

	//ie6初始化表单样式
	if(iever=="6.0"){
		$("input[type='button']").addClass("btn");
		$("input[type='submit']").addClass("btn");
		$("input[type='reset']").addClass("btn");
		$("input[type='text']").addClass("inputbg");
		$("textarea").addClass("inputbg");
		$("input[type='password']").addClass("inputbg");
		$("input[type='text']").focus(function(){ 
		$(this).addClass('inputfocus'); 
		}).blur(function(){ 
		$(this).removeClass('inputfocus'); 
		}); 
		$("textarea").focus(function(){ 
		$(this).addClass('inputfocus'); 
		}).blur(function(){ 
		$(this).removeClass('inputfocus'); 
		}); 
		$("input[type='password']").focus(function(){ 
		$(this).addClass('inputfocus'); 
		}).blur(function(){ 
		$(this).removeClass('inputfocus'); 
		}); 
	$(".sumlist li").hover(function(){
		$(this).addClass("thisli");
		}, function(){
			$(this).removeClass("thisli");
			})

		DD_belatedPNG.fix('img,.png');
	}

//table
$(".sumlist li.answ").append("<div class=tips1>◆</div><div class=tips2>◆</div>");
$(".simpleT tr:even").addClass("even");
$(".simpleT tr").hover(function(){
	$(this).addClass("thistr");
	}, function(){
		$(this).removeClass("thistr");
		})
$(".simpleT tr td:last-child").css("border-right", "none");
$(".simpleT th td:last-child").css("border-right", "none");
		
//list
$("ul.il li:last-child").css("border-bottom", "none")

$(".alertcon .close").each(function(){
	$(this).click(function(){
	$(this).parent().fadeOut()
	})
	})

});


//openWin
function openWin(title, url, w, h, level, drag, scrol) {
    if (!$("#openWin").html()) {
        switch (level) {
        case 1:
            var bg = "whitesha"
            break
        case 2:
            var bg = "shadow"
            break
        default:
            var bg = "nosha"
        }
		var winH=$(window).height();
		var winW=$(document).width();
		w=(w<winW)?w:(winW-80);
		h=(h<winH)?h:(winH-80);

        $("body").append("<div class=" + bg + "></div>");
        $("." + bg).css("height", $(document).height());
        $("." + bg).fadeIn();
        $("body").append("<table id=openWin cellpadding=0 cellspacing=0 border=0><tr><td class=tl></td><td class=tm></td><td class=tr></td></tr><tr><td class=ml></td><td class=mm></td><td class=mr></td></tr><tr><td class=bl></td><td class=bm></td><td class=br></td></tr>");
        $("#openWin .mm").append("<div class=tipbox><div class=titcon><em></em></div><div class=cont></div></div>");
        $("#openWin .tipbox").append("<div class=closethis>X</div>");
        $("#openWin").css({
            "width": w,
            "margin-left": ( - 1) * w / 2,
			"left":$(window).width()/2
        });
        $("#openWin .tipbox").css({
            "width": w - 16
        });
        if (h) {
            $("#openWin").css("height", h);
			var wtop=($(window).height()-h)/2
			if($.browser.msie&&$.browser.version<=7){
				wtop+=$(document).scrollTop()
				}
			$("#openWin").animate({top:wtop},{easing: 'easeOutBack'});
            $("#openWin .tipbox .cont").css("height", h - 40);
        }
        if (title) {
            $("#openWin .tipbox .titcon em").html(title);
        } else {
            $("#openWin .tipbox .titcon").css("display", "none");
        }
        if (url) {
			if(scrol){
				var scrolling="no";
				}else{
				var scrolling="auto";	
					}
            var tipiframe = '<iframe src="' + url + '" width="' + (w - 36) + 'px"  height="' + (h - 50) + 'px" frameborder=0 scrolling="' + scrolling + '"></iframe>';
			$("#openWin .cont").html("<div class=loading></div>");
            $("#openWin .cont").append(tipiframe);
            $("#openWin iframe").load(function() {
				$("#openWin .cont").html(tipiframe);
            })
        }
        $(".closethis").click(function() {
            $("." + bg).remove();
            $("#openWin").remove()
        });
        if (!drag) {
            var _move = false;
            var _x,_y;
			$("#openWin .tipbox .titcon").css("cursor","move");
            $("#openWin .tipbox .titcon").mousedown(function(e) {
                _move = true;
                _x = e.pageX - parseInt($("#openWin").css("left"));
                _y = e.pageY - parseInt($("#openWin").css("top"));
                //$("#openWin").fadeTo(20, 0.8)
            });
            $(document).mousemove(function(e) {
                if (_move) {
                    var x = e.pageX - _x;
                    var y = e.pageY - _y;
                    $("#openWin").css({
                        top: y,
                        left: x
                    })
                }
            }).mouseup(function() {
                _move = false;
                //$("#openWin").fadeTo("fast", 1)
            })
        }
    }
}

//check
function creatCheck(){
	$("form dd").each(function(e){
		var dd=$(this);
		var dl=$(this).parent();
		if($(dl).is(':visible')){
		var inp=$(dd).find("textarea:first").length>0?$(dd).find("textarea:first"):($(dd).find("select:first").length>0?$(dd).find("select:first"):$(dd).find("input:first"));
		var check=$(dd).attr("check");
		var required=$(dd).find("span").hasClass("required");
		var error=$(dd).attr("error")?$(dd).attr("error"):"<img src='/images/x.png' />";
		var pass=$(dd).attr("pass")?$(dd).attr("pass"):"v";
		var plus=$(dd).attr("plus");
		var tip=$(dd).attr("tip");
		var tip2=$(dd).attr("tip2")?$(dd).attr("tip2"):$(dd).attr("tip");
		if(!$(".tip"+e).length>0){
			$(dd).append("<span class='tip"+e+"'></span>");
		}
			if(check||required||plus||tip||tip2)
			{
				$(".tip"+e).html(tip);
				$(inp).focus(function(){
						$(".tip"+e).removeClass("required").html(tip2);
					}).blur(function(){
						checkForm(inp,check,required,error,pass,plus,e)
					});
			}}
	});
}

function clientCheck(){
	var reVal;
	$("form dd").each(function(e){
		try{
				reVal="";
				var dd=$(this);
				var dl=$(this).parent();
				if($(dl).is(':visible')){
				var inp=$(dd).find("textarea:first").length>0?$(dd).find("textarea:first"):($(dd).find("select:first").length>0?$(dd).find("select:first"):$(dd).find("input:first"));
				var check=$(dd).attr("check");
				var required=$(dd).find("span").hasClass("required");
				var error=$(dd).attr("error")?$(dd).attr("error"):"<img src='/images/x.png' />";
				var pass=$(dd).attr("pass")?$(dd).attr("pass"):"v";
				var plus=$(dd).attr("plus");
				var c=true;
				if(check||required||plus)
				{
					if(!checkForm(inp,check,required,error,pass,plus,e,c))
					{
						throw false;
					}
				}}
			}
		catch(i){
			reVal="1";
			return i;
			}
			
		//return true;
	});
	if(reVal=="1")
	{
		return false;
	}
	else
	{
		return true;
	}
  
};

function checkForm(obj,check,required,error,pass,plus,e,c){
	var objVal=$(obj).val();
	if(objVal==""&&required){
		if(c){
		$(".tip"+e).parent().find("input").focus();
		$(".tip"+e).addClass("required").html("<img src='/images/x.png' />不能为空！");
		return false;
		}else{
		$(".tip"+e).addClass("required").html("<img src='/images/x.png' />不能为空！");
		return false;
		}
		
	}
	if(objVal!=""){
		if(check){
			var reg,n,func;
			switch (check){
				case "num":
					reg=new RegExp("^[0-9]*$");
					break;
				case "positive":
					reg=new RegExp("(^[0-9]*[1-9][0-9]*$)|(^0$)");
					break;
				case "han":
					reg=new RegExp("^[\u4E00-\u9FA5]+$");
					break;
				case "name":
					reg=new RegExp("^\w+$");
					break;		
				case "len4":
					if(!checkLen(objVal,4)){
						func="字母不小于4位汉字不小于2位";
						}
					break;
				case "len6":
					if(!checkLen(objVal,6)){
						func="不能小于6位";
						}
					break;
				case "url":
					reg=new RegExp("^[a-zA-z]+://[^\s]+$");
					break;
				case "email":
					if(objVal) reg=new RegExp("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$");
					break;
				case "phone":
					reg=new RegExp("(^(0[0-9]{2,3}-)?[0-9]{7,8}(-[0-9]{1,4})?$)|(^0?1[358][0-9]{9}$)|(^[48]00(-)?[0-9]{7}(-[0-9]{1,4})?$)");
					break;
				case "tel":
					reg=new RegExp("(^(0[0-9]{2,3}-)?[0-9]{7,8}(-[0-9]{1,4})?$)|(^[48]00(-)?[0-9]{7}(-[0-9]{1,4})$)");
					break;
				case "mobile":
					reg=new RegExp("(^0?1[358][0-9]{9}$)");
					break;
				case "pwagain":
					if(!checkPw(obj,e)){
						func="两次输入密码不一致！"
						}
					break;
				case "drag":
					if ($("#spanDrag").html()==("请把横条拖动到右边")) {
						$("#spanDrag").addClass("required").html("<img src='/images/x.png' />"+"不拖过来不行哦");
						return false
					}else{
						pass="不错"
						}
					break;
	
				}	
			if(reg){
					if(!reg.test(objVal)){
						if(c){
						$(".tip"+e).parent().find("input").focus();
						$(".tip"+e).addClass("required").html("<img src='/images/x.png' />"+error);
						return false;
						}else{
						$(".tip"+e).addClass("required").html("<img src='/images/x.png' />"+error);
						return false;
						}
					}
				}
			if(func){
				if(c){
				$(".tip"+e).parent().find("input").focus();
				$(".tip"+e).addClass("required").html("<img src='/images/x.png' />"+func);
				return false;
				}else{
				$(".tip"+e).addClass("required").html("<img src='/images/x.png' />"+func);
				return false;
				}
				}
			
			}
			
		if(plus){
			if(plus=="username"){
					CheckUserName(obj,e);
					if($(".tip"+e).html()=="x"){
						$(".tip"+e).addClass("required").html("<img src='/images/x.png' />此用户名已存在！")
						 return false;
					}else if($(".tip"+e).html()=="v"){
						$(".tip"+e).remove("required").html("<img src='/images/v.png' />本用户名可以注册")
						 return true;
						}
				}
			if(plus=="code"){
					CheckCode(obj,e);
					if($(".tip"+e).html()=="x"){
						$(".tip"+e).addClass("required").html("<img src='/images/x.png' />验证码错误")
						 return false;
					}else if($(".tip"+e).html()=="v"){
						$(".tip"+e).remove("required").html("<img src='/images/v.png' />");
						 return true;
						}
				}
			if(plus=="sel"){
				return checkSel(obj,e);
				}
			if(plus=="scate"){
					return checksCate(obj,e);
				}
			if(plus=="jpg|png"){
					return isExtension(obj,e,"jpg|png");
				}		
			if(plus=="jpg|rar|doc|txt"){
					return isExtension(obj,e,"jpg|rar|doc|txt");
				}
		
			}
			
			
		
		if(pass=="v"){
			$(".tip"+e).removeClass("required").html("<img src='/images/v.png' />");
		}else{
			$(".tip"+e).removeClass("required").html(pass);
			}
	}
	
	return true;
}
function checkPw(obj,e){
	return $(obj).val()==$(obj).parent().parent().prev().find("dd").find("input:first").val()
}
function checkLen(objVal,n){
	return len(objVal)>=n;
}
function len(s) {
	if(s=="") return 0;
	var l = 0;
	var a = s.split("");
	for (var i=0;i<a.length;i++) 
	{
 		if (a[i].charCodeAt(0)<299) {
  		l++;
 		}
		else 
		{
  		l+=2;
 		}
	}
	return l;
} 
function checkSel(obj,e){
	var sel=$(obj);
	if($(sel).val()=="-1"){
		$(".tip"+e).addClass("required").html("<img src='/images/x.png' />请选择下拉框选项");
		return false;
		}
	$(".tip"+e).html("<img src='/images/v.png' />");
	return true;
	}
function checksCate(){
	//alert("345")
    var smallCate=document.getElementById("sel");    
    var list="";
	if(smallCate!=null)
	{
		for(var i=0;i<smallCate.options.length;i++)
		{
			if(i==0)
				list=list+smallCate.options[i].value;
			else
			  list=list+","+smallCate.options[i].value;
	
		}  
	}
    if(list.length>0)
    {    
       $("#hfSmallCateIDList").val(list);
    }
    else
    {
       $("#mess_Small").html("＊<img src='/images/x.png' />行业小类不能为空!");
	    return false;
    }
	 $("#mess_Small").html("＊<img src='/images/v.png' />");
	
    return true;	
}
function isExtension(obj,e,Extension)
{
    Extension=Extension.toLowerCase();
	var fielname=$(obj).val()
    var Extensions=Extension.split('|');
    var pos = fielname.split('.');
    var lastname = pos[pos.length-1].toLowerCase();
    for(var i=0;i<Extensions.length;i++)
    {
        if(lastname==Extensions[i])
        {
			$(".tip"+e).html("<img src='/images/v.png' />");
            return true;
        }
    }
	$(".tip"+e).addClass("required").html("<img src='/images/x.png' />请上传正确的文件类型");
    return false;
}
function checkDrag(){
	 var wq_move=false;
	 var drag_x;
	$("#wq_srollx #wq_drag").mousedown(function(e) {
           drag_x = e.pageX - parseInt($("#wq_srollx #wq_drag").css("left"));
		   wq_move=true;
    });
	$(document).mousemove(function(e) {
		 if (wq_move) {
           var dragx = e.pageX - drag_x;
		   var dragLeft=$("#wq_srollx").width()-$("#wq_srollx #wq_drag").width()
		   if(dragx>0&&dragx<=(dragLeft-10)){
           $("#wq_srollx #wq_drag").css("left", dragx);
		   }
		   if(dragx>(dragLeft-10)){
			   $("#wq_srollx #wq_drag").css("left", dragLeft);
			   $("#spanDrag").addClass("required").html("<img src='/images/v.png' />"); 
			   wq_move = false;
			   }else{
				$("#spanDrag").removeClass("required").html("请把横条拖动到右边");    
			}
			if(dragx<10){
			   $("#wq_srollx #wq_drag").css("left", 0);
		 	}
		}
	}).mouseup(function() {
                wq_move = false;
	});
}
function CheckUserName(obj,e) {
	$.ajax({
		type: "POST",
		url: "/member/CheckUserName.aspx",
		data: "userName=" +escape($(obj).val()) + "&&" + Math.random(),
		dataType: 'html',
		async: false,
		cache: false,
		beforeSend: function() {    
		},
		success: function(msg) {
			if (msg == "0")
			{
				$(".tip"+e).html("x");
				
			} 
			else
			{ 
				$(".tip"+e).html("v");
			} 
		},
		error: function() { }
	});		
}
function CheckCode(obj,e) {
	$.ajax({
		type: "POST",
		url: "/member/checkUserCode.aspx",
		data: "",
		dataType: 'html',
		async: false,
		cache: false,
		beforeSend: function() {    
		},
		success: function(msg) {
			if (msg != $(obj).val())
			{
				$(".tip"+e).html("x");
				
			} 
			else
			{ 
				$(".tip"+e).html("v");
			} 
		},
		error: function() { }
	});		
}


//cookie
jQuery.cookie = function(name, value, options) {
	if (typeof value != 'undefined') {
		options = options || {};
		if (value === null) {
			value = '';
			options = $.extend({}, options);
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString();
		}
		var path = options.path ? '; path=' + (options.path) : '';
		var domain = options.domain ? '; domain=' + (options.domain) : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
		} else {
			var cookieValue = null;
			if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
};

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

if(iever=="6.0"){
//dd_belatedpng
			var DD_belatedPNG={ns:"DD_belatedPNG",imgSize:{},delay:10,nodesFixed:0,createVmlNameSpace:function(){if(document.namespaces&&!document.namespaces[this.ns]){document.namespaces.add(this.ns,"urn:schemas-microsoft-com:vml")}},createVmlStyleSheet:function(){var b,a;b=document.createElement("style");b.setAttribute("media","screen");document.documentElement.firstChild.insertBefore(b,document.documentElement.firstChild.firstChild);if(b.styleSheet){b=b.styleSheet;b.addRule(this.ns+"\\:*","{behavior:url(#default#VML)}");b.addRule(this.ns+"\\:shape","position:absolute;");b.addRule("img."+this.ns+"_sizeFinder","behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;");this.screenStyleSheet=b;a=document.createElement("style");a.setAttribute("media","print");document.documentElement.firstChild.insertBefore(a,document.documentElement.firstChild.firstChild);a=a.styleSheet;a.addRule(this.ns+"\\:*","{display: none !important;}");a.addRule("img."+this.ns+"_sizeFinder","{display: none !important;}")}},readPropertyChange:function(){var b,c,a;b=event.srcElement;if(!b.vmlInitiated){return}if(event.propertyName.search("background")!=-1||event.propertyName.search("border")!=-1){DD_belatedPNG.applyVML(b)}if(event.propertyName=="style.display"){c=(b.currentStyle.display=="none")?"none":"block";for(a in b.vml){if(b.vml.hasOwnProperty(a)){b.vml[a].shape.style.display=c}}}if(event.propertyName.search("filter")!=-1){DD_belatedPNG.vmlOpacity(b)}},vmlOpacity:function(b){if(b.currentStyle.filter.search("lpha")!=-1){var a=b.currentStyle.filter;a=parseInt(a.substring(a.lastIndexOf("=")+1,a.lastIndexOf(")")),10)/100;b.vml.color.shape.style.filter=b.currentStyle.filter;b.vml.image.fill.opacity=a}},handlePseudoHover:function(a){setTimeout(function(){DD_belatedPNG.applyVML(a)},1)},fix:function(a){if(this.screenStyleSheet){var c,b;c=a.split(",");for(b=0;b<c.length;b++){this.screenStyleSheet.addRule(c[b],"behavior:expression(DD_belatedPNG.fixPng(this))")}}},applyVML:function(a){a.runtimeStyle.cssText="";this.vmlFill(a);this.vmlOffsets(a);this.vmlOpacity(a);if(a.isImg){this.copyImageBorders(a)}},attachHandlers:function(i){var d,c,g,e,b,f;d=this;c={resize:"vmlOffsets",move:"vmlOffsets"};if(i.nodeName=="A"){e={mouseleave:"handlePseudoHover",mouseenter:"handlePseudoHover",focus:"handlePseudoHover",blur:"handlePseudoHover"};for(b in e){if(e.hasOwnProperty(b)){c[b]=e[b]}}}for(f in c){if(c.hasOwnProperty(f)){g=function(){d[c[f]](i)};i.attachEvent("on"+f,g)}}i.attachEvent("onpropertychange",this.readPropertyChange)},giveLayout:function(a){a.style.zoom=1;if(a.currentStyle.position=="static"){a.style.position="relative"}},copyImageBorders:function(b){var c,a;c={borderStyle:true,borderWidth:true,borderColor:true};for(a in c){if(c.hasOwnProperty(a)){b.vml.color.shape.style[a]=b.currentStyle[a]}}},vmlFill:function(e){if(!e.currentStyle){return}else{var d,f,g,b,a,c;d=e.currentStyle}for(b in e.vml){if(e.vml.hasOwnProperty(b)){e.vml[b].shape.style.zIndex=d.zIndex}}e.runtimeStyle.backgroundColor="";e.runtimeStyle.backgroundImage="";f=true;if(d.backgroundImage!="none"||e.isImg){if(!e.isImg){e.vmlBg=d.backgroundImage;e.vmlBg=e.vmlBg.substr(5,e.vmlBg.lastIndexOf('")')-5)}else{e.vmlBg=e.src}g=this;if(!g.imgSize[e.vmlBg]){a=document.createElement("img");g.imgSize[e.vmlBg]=a;a.className=g.ns+"_sizeFinder";a.runtimeStyle.cssText="behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;";c=function(){this.width=this.offsetWidth;this.height=this.offsetHeight;g.vmlOffsets(e)};a.attachEvent("onload",c);a.src=e.vmlBg;a.removeAttribute("width");a.removeAttribute("height");document.body.insertBefore(a,document.body.firstChild)}e.vml.image.fill.src=e.vmlBg;f=false}e.vml.image.fill.on=!f;e.vml.image.fill.color="none";e.vml.color.shape.style.backgroundColor=d.backgroundColor;e.runtimeStyle.backgroundImage="none";e.runtimeStyle.backgroundColor="transparent"},vmlOffsets:function(d){var h,n,a,e,g,m,f,l,j,i,k;h=d.currentStyle;n={W:d.clientWidth+1,H:d.clientHeight+1,w:this.imgSize[d.vmlBg].width,h:this.imgSize[d.vmlBg].height,L:d.offsetLeft,T:d.offsetTop,bLW:d.clientLeft,bTW:d.clientTop};a=(n.L+n.bLW==1)?1:0;e=function(b,p,q,c,s,u){b.coordsize=c+","+s;b.coordorigin=u+","+u;b.path="m0,0l"+c+",0l"+c+","+s+"l0,"+s+" xe";b.style.width=c+"px";b.style.height=s+"px";b.style.left=p+"px";b.style.top=q+"px"};e(d.vml.color.shape,(n.L+(d.isImg?0:n.bLW)),(n.T+(d.isImg?0:n.bTW)),(n.W-1),(n.H-1),0);e(d.vml.image.shape,(n.L+n.bLW),(n.T+n.bTW),(n.W),(n.H),1);g={X:0,Y:0};if(d.isImg){g.X=parseInt(h.paddingLeft,10)+1;g.Y=parseInt(h.paddingTop,10)+1}else{for(j in g){if(g.hasOwnProperty(j)){this.figurePercentage(g,n,j,h["backgroundPosition"+j])}}}d.vml.image.fill.position=(g.X/n.W)+","+(g.Y/n.H);m=h.backgroundRepeat;f={T:1,R:n.W+a,B:n.H,L:1+a};l={X:{b1:"L",b2:"R",d:"W"},Y:{b1:"T",b2:"B",d:"H"}};if(m!="repeat"||d.isImg){i={T:(g.Y),R:(g.X+n.w),B:(g.Y+n.h),L:(g.X)};if(m.search("repeat-")!=-1){k=m.split("repeat-")[1].toUpperCase();i[l[k].b1]=1;i[l[k].b2]=n[l[k].d]}if(i.B>n.H){i.B=n.H}d.vml.image.shape.style.clip="rect("+i.T+"px "+(i.R+a)+"px "+i.B+"px "+(i.L+a)+"px)"}else{d.vml.image.shape.style.clip="rect("+f.T+"px "+f.R+"px "+f.B+"px "+f.L+"px)"}},figurePercentage:function(d,c,f,a){var b,e;e=true;b=(f=="X");switch(a){case"left":case"top":d[f]=0;break;case"center":d[f]=0.5;break;case"right":case"bottom":d[f]=1;break;default:if(a.search("%")!=-1){d[f]=parseInt(a,10)/100}else{e=false}}d[f]=Math.ceil(e?((c[b?"W":"H"]*d[f])-(c[b?"w":"h"]*d[f])):parseInt(a,10));if(d[f]%2===0){d[f]++}return d[f]},fixPng:function(c){c.style.behavior="none";var g,b,f,a,d;if(c.nodeName=="BODY"||c.nodeName=="TD"||c.nodeName=="TR"){return}c.isImg=false;if(c.nodeName=="IMG"){if(c.src.toLowerCase().search(/\.png$/)!=-1){c.isImg=true;c.style.visibility="hidden"}else{return}}else{if(c.currentStyle.backgroundImage.toLowerCase().search(".png")==-1){return}}g=DD_belatedPNG;c.vml={color:{},image:{}};b={shape:{},fill:{}};for(a in c.vml){if(c.vml.hasOwnProperty(a)){for(d in b){if(b.hasOwnProperty(d)){f=g.ns+":"+d;c.vml[a][d]=document.createElement(f)}}c.vml[a].shape.stroked=false;c.vml[a].shape.appendChild(c.vml[a].fill);c.parentNode.insertBefore(c.vml[a].shape,c)}}c.vml.image.shape.fillcolor="none";c.vml.image.fill.type="tile";c.vml.color.fill.on=false;g.attachHandlers(c);g.giveLayout(c);g.giveLayout(c.offsetParent);c.vmlInitiated=true;g.applyVML(c)}};try{document.execCommand("BackgroundImageCache",false,true)}catch(r){}DD_belatedPNG.createVmlNameSpace();DD_belatedPNG.createVmlStyleSheet();
}