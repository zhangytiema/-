$(function(){
    let $uname=$(".uname");
    let $upwd=$(".upwd");
    $(".btn_reg").click(function(){
        console.log($uname.val());
        if($uname.val()){
            if($upwd.val()){
                var str=`uname=${$uname.val()}&upwd=${$upwd.val()}`;
                console.log(str);
                $.ajax({
                    url:"http://localhost:4000/pro/login", 
                    type:"post",
                    data: str        
                 }) 
                 .then(function(result){
                     result==1 ? alert("登陆成功") : alert("用户名或密码错误")
                 })
            }else{alert("密码不能为空")};
        
        }else{ alert("用户名不能为空")};
  })
})