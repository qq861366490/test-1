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
			"info" => "请先登录",
			"status" => 0
		);
		echo $callback."(".json_encode($arr).")";
		exit();
	}
	$db = new CURD();
	
	$uid = $_SESSION['userid'];
	
	//定义sql
	$sql = 'select uc.id,uc.amount,g.goods_name,g.goods_price,g.goods_pic_m,g.goods_type,g.goods_stock from goods as g right join user_cart uc on uc.gid = g.id where uc.uid = '.$uid;
	
	//连接数据库获取数据
	$result = $db -> find($sql);
	
	$arr = array(
		'status' => 1,
		'data' => $result
	);
	
	//返回数据
	echo $callback."(".json_encode($arr).")";
?>