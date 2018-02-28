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
	
	if($_SESSION['login_time']){
		if((time()-$_SESSION['login_time']) > 30*60){
			unset($_SESSION['login_time']);
			unset($_SESSION['userid']);
		}else{
			$_SESSION['login_time'] = time();
		}
	}
	if(!$_SESSION['userid']){
		$arr = array(
			"info" => "未登录",
			"status" => 0
		);
		echo $callback."(".json_encode($arr).")";
		exit();
	}
	
	$id = $method['id'];
	$amount = $method['amount'];
	
	if(empty($id) || empty($amount)){
		$arr = array(
			"info" => "商品编号或数量必须！",
			"status" => 0
		);
		echo $callback."(".json_encode($arr).")";
		exit();
	}
	
	$db = new CURD();
	
	$sql = 'update user_cart set amount = "'.$amount.'" where id = "'.$id.'"';
	
	$result = $db -> update($sql);
	
	
	$arr = array(
		"info" => "更新失败",
		"status" => 0
	);
	
	if($result){
		$arr['info'] = "更新成功！";
		$arr['status'] = 1;
	}
	
	//返回数据
	echo $callback."(".json_encode($arr).")";
?>