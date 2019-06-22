$(function(){
    $.ajax({
    url:"./header.html",
    type:"get",
    success:function(result){
        $(result).replaceAll("header");
        $(`<link rel="stylesheet" href="./css/header.css">`).appendTo("head")
    
    }
    })
    $.ajax({
        url:"./footer.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("footer");
            $(`<link rel="stylesheet" href="./css/footer.css">`).appendTo("head")
        
        }
        })
})