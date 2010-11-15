/** Google buzz widget as a JQuery plugin
 * (c) Régis Décamps mailto:decamps@users.sf.net
 * http://code.google.com/p/regis/wiki/jqBuzzWidget
 * This plugin is released under GPL v2.
 */
(function ($) {
    // plugin entry point
    $.fn.googleBuzz = function (options) {
        var defaults = {
            userId: "googlebuzz",
            debug: true
        };
        option = $.extend({}, defaults, options)

        // this plugin is intended for a div container
        return this.each(function () {
            var destdiv = this;

            var request = function () {
                $.ajax({
                    url: "https://www.googleapis.com/buzz/v1/activities/"+option.userId+"/@public",
                    data: "alt=json",
                    success: displayBuzz,
                    error: googleFailed,
                    dataType: "jsonp"
                })
            };
            var googleFailed = function(XMLHttpRequest, textStatus, errorThrown) {
            	destdiv.html('<span class="buzz-error">Error '+textStatus+'</span>');
            };
            var displayBuzz = function (resp) {
            	$(destdiv).empty();
            	var items=resp.data.items;
                for (var i = 0; i < items.length; i++) {
                    destdiv.innerHTML += displayItem(items[i]);
                }
            };
            var displayItem = function (item) {
                // item.title
                var retval=['<div class="buzz-post">',
                '<span class="buzz-info"><a href="',
                item.actor.profileUrl,
                '#buzz">',
                item.actor.name,
                '</a></span> ',
                item.object.content,
                '<span class="buzz-meta">',
                item.published,
                '</span>',
                '</div>'];
                return retval.join('');
            }
            var init = function () {
                request();
            };
            init();
        });
    };
})(jQuery);