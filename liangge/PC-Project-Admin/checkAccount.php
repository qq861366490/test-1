<?php
	error_reporting(0);
	include "CURD.php";
	if(empty($_GET)){
		$method = $_POST;
	}else{
		$method = $_GET;
	}
	$callback = $method['callback'];
	$account = $method['account'];
	if(empty($account)){
		$arr = array(
			"info" => "未传入账号！",
			"status" => 0
		);
		echo $callback."(".json_encode($arr).")";
		exit();
	}
	$db = new CURD();
	//定义sql
	$sql = 'select id from user where account = "' . $account . '"';
	
	//连接数据库获取数据
	$result = $db -> find($sql);
	//定义返回结果
	$arr = array(
		"status" => 0
	);
	//count用于查询数组的长度
	if( count($result) ){
		$arr['status'] = 1;
	}
	//返回数据
	echo $callback."(".json_encode($arr).")";
?>