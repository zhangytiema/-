
  (function(){
    var uname=document.getElementsByName("uname")[0];
    var upwd=document.getElementsByName("upwd")[0];
    var zai=document.getElementsByClassName("zai_pwd")[0];
    var uphone=document.getElementsByClassName("phone")[0];
    var kaiguan=false;
    // 各项得到焦点
   upwd.onfocus=function(){ 
       huoqu(this, "英文字符数字组成至少8位")
      
    }
    uname.onfocus=function(){
        huoqu(this,"由数字和英文组成至少6位")
    }
    uphone.onfocus=function(){
        huoqu(this,"")
    }
    function huoqu(txt,xinzhi){
        var span=txt.nextElementSibling;
        span.className="";
        span.innerHTML=(xinzhi)
    }
    // 各项失去焦点
   uname.onblur=function (){
       var span=this.nextElementSibling;
       var reg=(/^\w{6,}$/)
       if(reg.test(this.value)==true){
           var xhr=new XMLHttpRequest();
           xhr.onreadystatechange=function(){

             if (xhr.readyState==4 && xhr.status==200)
               {
                    var result=xhr.responseText;
                if(result==0){
                  span.innerHTML="ok";
                  span.className="dui_xianshi";}
                else{
                    span.className="cuo_xianshi";
                    span.innerHTML="用户已存在或格式不对"
                }
             }
           }
         xhr.open("post","http://127.0.0.1:4000/pro/login",true);
           var formdata="uname="+uname.value;
           //由于Ajax默认传输时text无法传递特殊符号
           xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
           //console.log(formdata);
           xhr.send(formdata);
       }else{
           span.className="cuo_xianshi";
           span.innerHTML="用户已存在或格式不对"
       }
    }
    upwd.onblur=function(){
        var span=this.nextElementSibling;
        var reg=(/^\w{8,}$/)
        if(reg.test(this.value)==true){
            span.className="dui_xianshi"
            span.innerHTML="ok"
        }else{
            span.innerHTML="由数字和英文组成至少6位";
            span.className="cuo_xianshi"
           
        }   
    }
    zai.onblur=function(){
        var span=this.nextElementSibling;
        if(this.value==upwd.value){
            span.className="dui_xianshi"
            span.innerHTML="ok" 
        }else{
            span.className="cuo_xianshi"
          
        }
    }  
    uphone.onblur=function(){
        var span=document.getElementById("uphone");
        let reg=(/^1[3-8]\d{9}$/
        )
        if(reg.test(this.value)==true){
            span.className="dui_xianshi"
            span.innerHTML="ok"
            kaiguan=true;
    
        }else{
            span.className="cuo_xianshi";
            span.innerHTML="手机格式不对"
            
        }
    }  
    var btn=document.getElementsByClassName("zhuce_btn")[0]
    if(kaiguan=true){
        btn.onclick=function(){
            $.ajax({
               url:"http://localhost:4000/pro/reg",
               type:"post",
               data:"uname="+uname.value+"&upwd="+upwd.value+"&uphone="+uphone.value
           }).then(function(result){
               alert(result)
           })
         }
    }else{
        alert("没填完")
    }
   })()
    


