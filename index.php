<?php
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
$homepage;
if(fi === $lang){
   $homepage = file_get_contents('index_fi.html');
}else {
   $homepage = file_get_contents('index_en.html');
}
echo $homepage;
?>
