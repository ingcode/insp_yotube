jQuery(function($) {
	$('.insp_btn_bsearch').click(function(e){
		tobj = $(this);
		if(tobj.closest('.search_section').hasClass('search_section_active')){
		}else{
			e.preventDefault();
			$('.search_section').addClass('search_section_active');
		}

		tobj.removeAttr("disabled");
		
	});

	$('.clipboardBtn').on('click', function(e) {
		var text = $(this).data('docurl');
		$('#clip_target').val(text);

		//input박스 value를 선택
		$('#clip_target').select();

		// Use try & catch for unsupported browser
		try {
				// The important part (copy selected text)
				var successful = document.execCommand('copy');

				if(successful) alert('주소가 복사되었습니다.');
		} catch (err) {
				alert('이 브라우저는 지원하지 않습니다.')
		}
	})

});

// SNS post
(function($) {
	$.fn.snspost = function(opts) {
		var loc = '';
		opts = $.extend({}, {type:'twitter', event:'click', content:''}, opts);
		opts.content = encodeURIComponent(opts.content);
		switch(opts.type) {
			case 'facebook':
				loc = 'http://www.facebook.com/share.php?t='+opts.content+'&u='+encodeURIComponent(opts.url||location.href);
				break;
			case 'delicious':
				loc = 'http://www.delicious.com/save?v=5&noui&jump=close&url='+encodeURIComponent(opts.url||location.href)+'&title='+opts.content;
				break;
			case 'twitter':
				loc = 'http://twitter.com/home?status='+opts.content;
				break;
			case 'google' :
				loc = 'http://plus.google.com/share?url='+encodeURIComponent(opts.url||location.href)+'?l=ko='+opts.content;
				break;
		}
		this.bind(opts.event, function() {
			window.open(loc);
			return false;
		});
	};
	$.snspost = function(selectors, action) {
		$.each(selectors, function(key,val) {
			$(val).snspost( $.extend({}, action, {type:key}) );
		});
	};

})(jQuery);
