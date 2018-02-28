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
	
	$uid = $_SESSION['userid'];
	$gid = $method['id'];
	$amount = $method['amount'];
	
	if(empty($gid) || empty($amount)){
		$arr = array(
			"info" => "商品编号或数量必须！",
			"status" => 0
		);
		echo $callback."(".json_encode($arr).")";
		exit();
	}
	
	$db = new CURD();
	
	$sql = 'select amount from user_cart where uid = "'.$uid.'" and gid = "'.$gid .'"';
	$result = $db -> find($sql);
	
	if(count($result)){
		$sql = 'update user_cart set amount = "'.($result[0]['amount']+$amount).'" where uid = "'.$uid.'" and gid = "'.$gid.'"';
	}else{
		$sql = 'insert into user_cart(uid,gid,amount) values("'.$uid.'","'.$gid.'","'.$amount.'")';
	}
	
	//连接数据库获取数据
	$result = $db -> insert($sql);
	
	$arr = array(
		"info" => "加入购物车失败！",
		"status" => 0
	);
	
	if($result){
		$arr['info'] = "加入购物车成功！";
		$arr['status'] = 1;
	}
	
	//返回数据
	echo $callback."(".json_encode($arr).")";
?>