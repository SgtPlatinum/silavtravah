<? include("includes/db.php");
$echo = "Тут скоро что-то будет";
?>
<!DOCTYPE html>
<html>
<head>
             <title>Админка</title>
             <link rel="stylesheet" href="admin.css">
</head>
<body>
             <div class='wrapper'>
                           <main class='main' id='main'>
                                          <?echo $echo;?>
                          </main>
             </div>
</body>
</html>

$echo = "<div class='table'>
<div class='tale-wrapper'>
            <div class='table-title'>Войти в панель администратора</div>
            <div class='table-content'>
                        <form method='post' id='login-form' class='login-form'>
                                      <input type='text' placeholder='Логин' class='input'
                                        name='login' required><br>
                                     <input type='password' placeholder='Пароль' class='input'
                                       name='password' required><br>
                                    <input type='submit' value='Войти' class='button'>
                      </form>
             </div>
</div>
</div>";

