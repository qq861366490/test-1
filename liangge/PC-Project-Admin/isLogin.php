<?php
	error_reporting(0);
	session_start();
	if(empty($_GET)){
		$method = $_POST;
	}else{
		$method = $_GET;
	}
	$callback = $method['callback'];
	if($_SESSION['login_time']){
		if((time()-$_SESSION['login_time']) > 30*60){
			unset($_SESSION['login_time']);
			unset($_SESSION['userid']);
		}else{
			$_SESSION['login_time'] = time();
		}
	}
	if($_SESSION['userid']){
		$arr = array(
			"info" => "已登录",
			"account" => $_SESSION['account'],
			"status" => 1
		);
	}else{
		$arr = array(
			"info" => "未登录",
			"status" => 0
		);
	}
	echo $callback."(".json_encode($arr).")";
?>