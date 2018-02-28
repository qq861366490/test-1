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
	$db = new CURD();
	//定义sql
	$sql = 'select id,goods_type,goods_price,goods_pic_s,goods_pic_l,goods_stock from goods';
	
	//连接数据库获取数据
	$result = $db -> find($sql);
	
	//返回数据
	echo $callback."(".json_encode($result).")";
?>