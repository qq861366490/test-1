<?php
	error_reporting(0);
	include "CURD.php";
	$db = new CURD();
	
	if(empty($_GET)){
		$method = $_POST;
	}else{
		$method = $_GET;
	}
	$callback = $method['callback'];
	
	//ajax请求还是表单提交
	if(!empty($callback)){
		$re_type = "ajax";
	}else{
		$re_type = "form";
	}
	
	$account = $method['account'];
	$password = $method['password'];
	$phone = $method['phone'];
	
	if(empty($account) || empty($password)){
		handle("用户名或者密码必须！",0);
	}
	
	$sql = 'select id from user where phone = "'.$phone.'" or account = "'.$account.'"';
	if(count($db -> find($sql))){
		handle("用户名或者手机号已存在！",0);
	}
	
	//定义sql
	$sql = 'insert into user(account,password,phone) values("'.$account.'","'.$password.'","'.$phone.'")';
	//连接数据库获取数据
	$result = $db -> insert($sql);
	//定义返回结果
	$info = '注册失败';
	$status = 0;
	
	if( $result ){
		$info = '注册成功';
		$status = 1;
	}
	
	handle($info,$status);
	
	function handle($info,$status){
		global $re_type;
		global $callback;
		if($re_type == 'ajax'){
			$arr = array(
				"info" => $info,
				"status" => $status
			);
			echo $callback."(".json_encode($arr).")";
		}else{
			echo $info;
		}
		exit();
	}
?>