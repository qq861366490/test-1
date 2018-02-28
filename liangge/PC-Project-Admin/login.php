<?php
	error_reporting(0);
	session_start();
	
	include "CURD.php";
	if(empty($_GET)){
		$method = $_POST;
	}else{
		$method = $_GET;
	}
	$callback = $method['callback'];
	$account = $method['account'];
	$password = $method['password'];
	if(empty($account) || empty($password)){
		$arr = array(
			"info" => "用户名或者密码必须！",
			"status" => 0
		);
		echo $callback."(".json_encode($arr).")";
		exit();
	}
	
	$db = new CURD();
	//定义sql
	$sql = 'select id,account from user where (phone = "'.$account.'" || account = "'.$account.'") and password = "'.$password.'" ';
	
	//连接数据库获取数据
	$result = $db -> find($sql);
	$arr = array(
		"info" => "登录失败!",
		"status" => 0
	);
	if( count($result) ){
		$arr['info'] = '登录成功！';
		$arr['status'] = 1;
		//记录登录信息
		$uid = $result[0]['id'];
		$status = count($result);
		$login_time = date("Y-m-d H:i:s",time()+8*3600);
		$sql = 'insert into log(uid,login_status,login_time) values("'.$uid.'","'.$status.'","'.$login_time.'")';
		$result = $db -> insert($sql);
		$_SESSION['userid'] = $uid;
		$_SESSION['accout'] = $account;
		$_SESSION['login_time'] = time();
	}
	//返回数据
	echo $callback."(".json_encode($arr).")";
?>