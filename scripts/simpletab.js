(function ($) {
    $.fn.extend({
        simpletabs: function () {
            var items = []
              , links = $("a", this);

            $.each(links, function (i) {
                items.push({
                    anchor: $(this),
                    view: $(this).attr("href"),
                    show: function () {
                        $(this.view).show();
                    },
                    hide: function () {
                        $(this.view).hide();
                    }
                });
            });


            function View(items) { 
				this.tabs = items;
			};
			
            View.prototype.collapse = function () {
                $.each(this.tabs, function () {
                    this.hide();
                });
            };

            View.prototype.attachHandlers = function () {
                var that = this;
                $.each(that.tabs, function (i) {
                    $(this.anchor).click(function () {
                        that.collapse();
                        (function (index) {
                            that.tabs[index].show();
                        })(i);
                    });
                });
            };
			
			View.prototype.expand = function(index)
			{
				this.collapse();
				if( index < (this.tabs.length -1) ){
					this.tabs[index].show();
				}
			};

            View.prototype.init = function () {
                this.attachHandlers();
                this.expand(0);
            };
			
			var view = new View(items);
            view.init();
        }
    });
})(jQuery);