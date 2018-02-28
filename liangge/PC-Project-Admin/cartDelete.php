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
	if(is_array($id)){
		$id = implode(',',$id);
	}
	
	if(empty($id)){
		$arr = array(
			"info" => "购物记录编号必须！",
			"status" => 0
		);
		echo $callback."(".json_encode($arr).")";
		exit();
	}
	
	$db = new CURD();
	
	$sql = 'delete from user_cart where id in ('.$id.')';
	
	$result = $db -> delete($sql);
	
	
	$arr = array(
		"info" => "删除失败",
		"status" => 0
	);
	
	if($result){
		$arr['info'] = "删除成功！";
		$arr['status'] = 1;
	}
	
	//返回数据
	echo $callback."(".json_encode($arr).")";
?>