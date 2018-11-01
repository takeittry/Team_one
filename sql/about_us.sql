set Names utf8;

drop database if exists TeamOne;

create database TeamOne charset=utf8;

use TeamOne;

create table T_pic(
  uid TINYINT primary key AUTO_INCREMENT,
  uname varchar(8),
  des varchar(255),
  pic varchar(128)
);

INSERT INTO `t_pic` (`uid`, `uname`, `des`, `pic`) VALUES
(1, '刘泽星', '本组组长，性格低调', 'http://127.0.0.1:3000/img/lzx.jpg'),
(2, '刘聪', '性格：随和<br>\r\n能力：能力一般 但是虚心谦逊<br>\r\n颜值：一般般<br>\r\n发型：学生头<br>\r\n爱好：喜欢单独一个人<br>\r\n是否有女朋友：没有（以后会有）', 'http://127.0.0.1:3000/img/lc.jpg'),
(3, '张越', '看她折纤腰以微步，<br>呈皓腕于轻纱。<br>眸含春水清波流盼，<br>头上倭堕髻斜插碧玉龙凤钗。<br>香娇玉嫩秀靥艳比花娇，<br>指如削葱根口如含朱丹，<br>一颦一笑动人心魂。', 'http://127.0.0.1:3000/img/zy.jpg'),
(4, '秦梁', '帅气中又带着一抹温柔！他身上散发出来的气质好复杂，像是各种气质的混合，但在那些温柔与帅气中，又有着他自己独特的空灵与俊秀！白皙的皮肤衬托着淡淡桃红色的嘴唇，俊美突出的五官，完美的脸型。甚至比我们组长还要帅上几分！', 'http://127.0.0.1:3000/img/ql.jpg'),
(5, '李杭', '性格：表里如一<br>\r\n能力：能力一般 但是虚心努力<br>\r\n颜值：清纯阳光可爱<br>\r\n爱好：唱歌 打游戏 喜欢与朋友在一起<br>\r\n是否有男朋友：没有（以后会有）<br>\r\n三围：不详(太瘦了没被重视)\r\n', 'http://127.0.0.1:3000/img/lh.jpg'),
(6, '何思奇', '性格：两个字 “完美”<br>\r\n能力：能力一般 但是虚心努力<br>\r\n颜值：世人皆叹女儿身<br>\r\n发型：学生头<br>\r\n爱好： 读书看书看书看书看书', 'http://127.0.0.1:3000/img/hsq.jpg');