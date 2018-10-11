$(function(){
	// 页面跳转
	$('.contentLeft ul').on({
		click:function(){
			var select=$(this).find('span').text();
			switch (select) {
				case "首页":
					// statements_1
					$('.contentRight').load('pages/home.html');
					break;
				case "栏目管理":
					$('.contentRight').load('pages/category.html');
					break;
				case "新闻管理":
					$('.contentRight').load('pages/news.html');
					break;
				case "文件管理":
					$('.contentRight').load('pages/file.html');
					break;
				case "评论管理":
					$('.contentRight').load('pages/comment.html');
					break;
				case "统计管理":
					$('.contentRight').load('pages/statistics.html');
						break;
				case "用户管理":
					$('.contentRight').load('pages/user.html');

					break;
				default:
					// statements_def
					break;
			}
			$('.noticeDiv').find('span').text(select);
		}
	},'li');
	//打开与关闭导航条
	$('.noticeDiv i').click(function(){
		$('.leftDiv').animate({width:'toggle'},10,function(){
			if($(this).is(':hidden')){
				var $width=$(window).width();
				$('.rightDiv').animate({width:$width},300);
			}else{
				$('.rightDiv').animate({width:'86%'},300);
			}
		});
		
	})
});
	//时间函数
	//参数 true 返回时分秒 false 则不返回时分秒
function getDate(boolean){
	var date=new Date();
	var year=date.getFullYear();
	var moth=date.getMonth()+1;
	var day=date.getDay();
	var hour=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	moth=dateFormat(moth);
	day=dateFormat(day);
	hour=dateFormat(hour);
	minutes=dateFormat(minutes);
	seconds=dateFormat(seconds);
	if(boolean){
		return year+'-'+moth+'-'+day+' '+hour+':'+minutes+':'+seconds;
	}else{
		return year+'-'+moth+'-'+day;	
	}
}
//如果日期小于10则自动补0
function dateFormat(m){
	return m<10?"0"+m:m;
}
function alertMessage(status,option){
	if(status==200){
		$('.alertDiv .alert').removeClass('alert-danger');
		$('.alertDiv strong').text(option+'成功');
	}else{
		$('.alertDiv .alert').addClass('alert-danger');
		$('.alertDiv strong').text(option+'失败');
	}
}

