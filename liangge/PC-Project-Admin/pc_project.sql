/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : pc_project

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-03-10 13:58:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` varchar(8) NOT NULL,
  `goods_name` varchar(255) NOT NULL,
  `goods_type` varchar(255) NOT NULL,
  `goods_price` varchar(10) NOT NULL,
  `goods_pic_s` varchar(255) NOT NULL,
  `goods_pic_m` varchar(255) NOT NULL,
  `goods_pic_l` varchar(255) NOT NULL,
  `goods_stock` int(6) NOT NULL DEFAULT '9999',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('wh2017fd', 'NB F100（17-27英寸）液晶电脑显示器支架多功能桌面显示器支架旋转升降', '单屏 | 桌面架 上下升降 2-6.5kg', '259.00', 'http://192.168.55.37/PC-Project-Admin/image/58773bc6Nd466d176.jpg', 'http://192.168.55.37/PC-Project-Admin/image/58773bc6Nd466d176-mid.jpg', 'http://192.168.55.37/PC-Project-Admin/image/58773bc6Nd466d176-large.jpg', '199', '1');
INSERT INTO `goods` VALUES ('wh20176d', 'NB F160（17-27英寸）双屏显示器支架/电脑显示器支架/桌面自由升降支架', '双屏 | 性价比高 智能架2-6.5kg', '299.00', 'http://192.168.55.37/PC-Project-Admin/image/58743e5eN710c930b.jpg', 'http://192.168.55.37/PC-Project-Admin/image/58743e5eN710c930b-mid.jpg', 'http://192.168.55.37/PC-Project-Admin/image/58743e5eN710c930b-large.jpg', '199', '1');
INSERT INTO `goods` VALUES ('wh2017i4', 'NB F150（17-27英寸）电脑显示器支架 液晶显示器支架 旋转升降伸缩支架 ', '双臂| 壁挂多角度调节', '199.00', 'http://192.168.55.37/PC-Project-Admin/image/57edd6abNfe4be07c.jpg', 'http://192.168.55.37/PC-Project-Admin/image/57edd6abNfe4be07c-mid.jpg', 'http://192.168.55.37/PC-Project-Admin/image/57edd6abNfe4be07c-large.jpg', '20', '1');

-- ----------------------------
-- Table structure for `log`
-- ----------------------------
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `uid` int(5) NOT NULL,
  `login_time` varchar(255) NOT NULL,
  `login_status` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of log
-- ----------------------------
INSERT INTO `log` VALUES ('6', '1', '2017-03-09 17:18:24', '1', '1');
INSERT INTO `log` VALUES ('5', '1', '2017-03-09 17:10:45', '1', '1');
INSERT INTO `log` VALUES ('4', '1', '2017-03-09 17:09:43', '1', '1');
INSERT INTO `log` VALUES ('12', '1', '2017-03-09 21:22:19', '1', '1');
INSERT INTO `log` VALUES ('9', '1', '2017-03-09 17:36:17', '1', '1');
INSERT INTO `log` VALUES ('10', '1', '2017-03-09 17:36:56', '1', '1');
INSERT INTO `log` VALUES ('11', '1', '2017-03-09 17:38:30', '1', '1');
INSERT INTO `log` VALUES ('13', '1', '2017-03-09 21:22:59', '1', '1');
INSERT INTO `log` VALUES ('14', '1', '2017-03-10 08:08:10', '1', '1');
INSERT INTO `log` VALUES ('15', '1', '2017-03-10 09:59:28', '1', '1');
INSERT INTO `log` VALUES ('16', '1', '2017-03-10 09:59:45', '1', '1');
INSERT INTO `log` VALUES ('17', '1', '2017-03-10 11:01:20', '1', '1');
INSERT INTO `log` VALUES ('18', '1', '2017-03-10 12:49:18', '1', '1');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'wenhao', '123456', '18200000000', '1');
INSERT INTO `user` VALUES ('2', 'qingsong', '123456', '18700000000', '1');
INSERT INTO `user` VALUES ('3', 'roderrick', '123456', '15866668888', '1');
INSERT INTO `user` VALUES ('4', 'zhangsan', '123456', '18266666666', '1');

-- ----------------------------
-- Table structure for `user_cart`
-- ----------------------------
DROP TABLE IF EXISTS `user_cart`;
CREATE TABLE `user_cart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(5) NOT NULL,
  `gid` varchar(8) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `amount` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_cart
-- ----------------------------
INSERT INTO `user_cart` VALUES ('9', '1', 'wh20176d', '1', '7');
INSERT INTO `user_cart` VALUES ('12', '1', 'wh2017i4', '1', '4');
INSERT INTO `user_cart` VALUES ('13', '1', 'wh2017fd', '1', '4');
