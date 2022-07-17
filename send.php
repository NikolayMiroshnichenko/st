<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
 
/* Сюда впишите свою эл. почту */
$myaddres  = "asohar29@gmail.com"; // кому отправляем
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Заказ обратного звонка!\nТелефон: $phone\nИмя: $name";
 
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ'; //сабж
$email='Cтоунлайт'; // от кого
$send = mail ($myaddres,$sub,$mes, "Content-type: text/plain; charset=utf-8\r\nFrom:$email");