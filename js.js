$(document).ready(function(){
    $("#loginButton").click(function(){
        var username = $("#loginName").val().trim();
        var password = $("#loginPass").val().trim();

        if( username != "" && password != "" ){
            $.ajax({
                url:'http://webbred2.utb.hb.se/~fewe/api/api.php?data=students',
                type:'post',
                data:{username:username,password:password},
                success:function(response){
                    var msg = "";
                    if(response == 1){
                        window.location.href = "html/quiz.html";
                    }else{
                        msg = "Ogiltig Användarnamn eller Lösenord!";
                    }
                    $("#message").html(msg);
                }
            });
        }
    });
});
