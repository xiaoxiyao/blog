//初始化代码高亮
hljs.initHighlightingOnLoad();
//加载效果完成
$(window).on('load', function() {
	setTimeout(function() {
		$('body').addClass('loaded');
	}, 200);
});

$(function() {

	//抽屉导航菜单激活项
	$('.mdl-layout__drawer').find('.mdl-navigation').find('.mdl-navigation__link').each(function() {
		var $this = $(this);
		if ($this.attr('href') == location.pathname) {
			$this.addClass('active');
		} else {
			$this.removeClass('active');
		}
	});

	//一言api（http://bilibibi.me/hitoapi/）
	$.ajax({
		url: "https://hitoapi.cc/sp/",
		method: "GET",
		dataType: "json"
	}).done(function(hito) {
		$hitokoto = $("#hitokoto");
		$hitokoto.find(".hito-text").html(hito.text);
		$hitokoto.find(".hito-author").html("——  " + hito.author);
		$hitokoto.find("a").attr("href", 'http://hitokoto.us/view/' + hito.id + '.html');
		$hitokoto.addClass("ready");
	});

	//打开关闭抽屉
	var $main_container = $('.main-container');
	$('#close-drawer').on('click', function() {
		$main_container.addClass('drawer-closed');
	});
	$('.open-drawer-button').on('click', function() {
		$main_container.removeClass('drawer-closed');
	});

});
