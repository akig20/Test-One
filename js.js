
$("#loginForm").submit(function(event)
{
    event.preventDefault();

    $.ajax({
        url: "http://webbred2.utb.hb.se/~fewe/api/api.php?data=students",
        type: "GET",
        dataType:"json",
        data:({
            username: $('#username').val(),
            password: $('#password').val()
        }),
        success: function(result)
        {
            if(result && result.auth_token.length>1) // you should do your checking here
            {
                window.location.href = 'http://www.google.com/'; //just to show that it went through
            }
            else
            {
                $('#result').empty().addClass('error')
                    .append('Something is wrong.');
            }
        }
    });
    return false;
  })
