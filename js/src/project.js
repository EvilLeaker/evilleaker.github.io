(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c)
                        return c(i, !0);
                    if (u)
                        return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND",
                    a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)
            o(t[i]);
        return o
    }
    return r
}
)()({
    1: [function(require, module, exports) {
        "use strict";

        // sp ヘッダーボタン
        $(".header--btn").on("click", function() {
            $(".header").toggleClass("open");
        });

        //背景
        var mvVideo = document.querySelector(".common--bg__loop--mv");
        mvVideo.play().then(function() {
            mvVideo.pause();
            setTimeout(function() {
                mvVideo.play();
                if (DEVICE.isPc) {
                    document.querySelector(".common--bg__loop--mv.sp-none").classList.add("js-show");
                } else if (DEVICE.isSp) {
                    document.querySelector(".common--bg__loop--mv.pc-none").classList.add("js-show");
                }
                document.querySelector(".common--bg__loop--thumb").classList.remove("js-show");
            }, 50);
        })["catch"](function(error) {
            $(".common--bg__loop--thumb").addClass("js-show");
        });

        // スムーススクロール
        $('a[href^="#"]').click(function() {
            var speed = 500;
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? "html" : href);
            var position = target.offset().top;
            if ($(this).hasClass("smooth")) {
                $("html, body").animate({
                    scrollTop: position
                }, speed, "swing");
            }
            return false;
        });

        // ボタンスクロール連動
        $(window).on("scroll", function() {
            var $toTopButton = $(".header--btn,.common--top");
            var scrollTop = $(this).scrollTop();
            var windowHeight = $(this).height();
            if (scrollTop >= windowHeight - 600) {
                $toTopButton.removeClass("off");
            } else {
                $toTopButton.addClass("off");
            }
        });

        // カレント表示
        $(window).on("load", function() {
            var now_position = $(".header--nav").data("now");
            $(".header--nav__link").each(function(index, element) {
                var link_position = $(this).data("current");
                if (now_position == link_position) {
                    $(this).addClass("on");
                }
            });
        });

        // play sp 開閉
        if (DEVICE.isSp) {
            $(".snav--nav__list").hide();
        }
        $(".snav--nav__current").on("click", function() {
            $(this).stop().toggleClass("open");
            $(".snav--nav__list").stop().slideToggle();
        });
        $(window).on("load", function() {
            var now = $('.common--h3').data("current");
            $(".snav--nav__item").each(function(index, element) {
                // element == this
                if ($(this).data("current") == now) {
                    $(this).addClass("current");
                }
            });
        });

        // rest api
        var request = new XMLHttpRequest();
        request.open('GET', 'https://performai.evilleaker.com/wp-json/thistheme/v1/articlesRest', true);
        request.responseType = 'json';
        request.onload = function() {
            var data = this.response;
            var news_list_length = Math.min(data.length, 3);
            for (var i = 0; i < news_list_length; i++) {
                var element = data[i];
                var html = "\n<a href=\"".concat(element["permalink"], "\" class=\"top--news__box\">\n<div class=\"top--news__box--inner\">\n<p class=\"top--news__date\"><span>").concat(element.date, "</span>UP</p>\n<p class=\"top--news__title\"><span class=\"title\">").concat(element.title, "</span></p>\n<div class=\"top--news__thumb\"><img src=\"").concat(element.thumbnail, "\" alt=\"\"></div>\n</div>\n</a>\n");
                $("#top_news").append(html);
            }
        }
        ;
        request.send();

    }
    , {}]
}, {}, [1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvcHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQ3hDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0FBQ2xDLENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxDQUNKLElBQUksQ0FBQyxDQUFDLENBQ04sSUFBSSxDQUFDLFlBQU07RUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7RUFFZixVQUFVLENBQUMsWUFBWTtJQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7TUFDZixRQUFRLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDbEYsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtNQUN0QixRQUFRLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDbEY7SUFDQSxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFDaEYsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNSLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQyxLQUFLLEVBQUs7RUFDaEIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUNuRCxDQUFDLENBQUM7O0FBRUo7QUFDQSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsS0FB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U0FBUyxDQUFDO0lBQzdCO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsQ0FBQztBQUVsQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxrRUFBa0UsRUFBRSxJQUFJLENBQUM7QUFDN0YsT0FBTyxDQUFDLFlBQVksR0FBRyxNQUFNO0FBRTdCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsWUFBWTtFQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUTtFQUN4QixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxJQUFJLGtCQUFBLE1BQUEsQ0FDRCxPQUFPLENBQUMsV0FBVyxDQUFDLDhHQUFBLE1BQUEsQ0FFSSxPQUFPLENBQUMsSUFBSSx5RUFBQSxNQUFBLENBQ0csT0FBTyxDQUFDLEtBQUssOERBQUEsTUFBQSxDQUNyQixPQUFPLENBQUMsU0FBUyx1Q0FHMUQ7SUFDRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztFQUM3QjtBQUNGLENBQUM7QUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBzcCDjg5jjg4Pjg4Djg7zjg5zjgr/jg7NcbiQoXCIuaGVhZGVyLS1idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoXCIuaGVhZGVyXCIpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcbn0pO1xuXG4vL+iDjOaZr1xuY29uc3QgbXZWaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbW9uLS1iZ19fbG9vcC0tbXZcIik7XG5tdlZpZGVvXG4gIC5wbGF5KClcbiAgLnRoZW4oKCkgPT4ge1xuICAgIG12VmlkZW8ucGF1c2UoKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgbXZWaWRlby5wbGF5KCk7XG4gICAgICBpZiAoREVWSUNFLmlzUGMpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21tb24tLWJnX19sb29wLS1tdi5zcC1ub25lXCIpLmNsYXNzTGlzdC5hZGQoXCJqcy1zaG93XCIpO1xuICAgICAgfSBlbHNlIGlmIChERVZJQ0UuaXNTcCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1vbi0tYmdfX2xvb3AtLW12LnBjLW5vbmVcIikuY2xhc3NMaXN0LmFkZChcImpzLXNob3dcIik7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1vbi0tYmdfX2xvb3AtLXRodW1iXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zaG93XCIpO1xuICAgIH0sIDUwKTtcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICQoXCIuY29tbW9uLS1iZ19fbG9vcC0tdGh1bWJcIikuYWRkQ2xhc3MoXCJqcy1zaG93XCIpO1xuICB9KTtcblxuLy8g44K544Og44O844K544K544Kv44Ot44O844OrXG4kKCdhW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNwZWVkID0gNTAwO1xuICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gIHZhciB0YXJnZXQgPSAkKGhyZWYgPT0gXCIjXCIgfHwgaHJlZiA9PSBcIlwiID8gXCJodG1sXCIgOiBocmVmKTtcbiAgdmFyIHBvc2l0aW9uID0gdGFyZ2V0Lm9mZnNldCgpLnRvcDtcbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJzbW9vdGhcIikpIHtcbiAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogcG9zaXRpb25cbiAgICB9LCBzcGVlZCwgXCJzd2luZ1wiKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KTtcblxuLy8g44Oc44K/44Oz44K544Kv44Ot44O844Or6YCj5YuVXG4kKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgJHRvVG9wQnV0dG9uID0gJChcIi5oZWFkZXItLWJ0biwuY29tbW9uLS10b3BcIik7XG4gIHZhciBzY3JvbGxUb3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcbiAgaWYgKHNjcm9sbFRvcCA+PSB3aW5kb3dIZWlnaHQgLSA2MDApIHtcbiAgICAkdG9Ub3BCdXR0b24ucmVtb3ZlQ2xhc3MoXCJvZmZcIik7XG4gIH0gZWxzZSB7XG4gICAgJHRvVG9wQnV0dG9uLmFkZENsYXNzKFwib2ZmXCIpO1xuICB9XG59KTtcblxuLy8g44Kr44Os44Oz44OI6KGo56S6XG4kKHdpbmRvdykub24oXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vd19wb3NpdGlvbiA9ICQoXCIuaGVhZGVyLS1uYXZcIikuZGF0YShcIm5vd1wiKTtcbiAgJChcIi5oZWFkZXItLW5hdl9fbGlua1wiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgIHZhciBsaW5rX3Bvc2l0aW9uID0gJCh0aGlzKS5kYXRhKFwiY3VycmVudFwiKTtcbiAgICBpZiAobm93X3Bvc2l0aW9uID09IGxpbmtfcG9zaXRpb24pIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJvblwiKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIHBsYXkgc3Ag6ZaL6ZaJXG5pZiAoREVWSUNFLmlzU3ApIHtcbiAgJChcIi5zbmF2LS1uYXZfX2xpc3RcIikuaGlkZSgpO1xufVxuJChcIi5zbmF2LS1uYXZfX2N1cnJlbnRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuc3RvcCgpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcbiAgJChcIi5zbmF2LS1uYXZfX2xpc3RcIikuc3RvcCgpLnNsaWRlVG9nZ2xlKCk7XG59KTtcbiQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgbm93ID0gJCgnLmNvbW1vbi0taDMnKS5kYXRhKFwiY3VycmVudFwiKTtcbiAgJChcIi5zbmF2LS1uYXZfX2l0ZW1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAvLyBlbGVtZW50ID09IHRoaXNcbiAgICBpZiAoJCh0aGlzKS5kYXRhKFwiY3VycmVudFwiKSA9PSBub3cpIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjdXJyZW50XCIpXG4gICAgfVxuICB9KTtcbn0pXG5cbi8vIHJlc3QgYXBpXG52YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5yZXF1ZXN0Lm9wZW4oJ0dFVCcsICdodHRwczovL2luZm8tY2h1bml0aG0uc2VnYS5jb20vd3AtanNvbi90aGlzdGhlbWUvdjEvYXJ0aWNsZXNSZXN0JywgdHJ1ZSk7XG5yZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdqc29uJztcblxucmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBkYXRhID0gdGhpcy5yZXNwb25zZTtcbiAgdmFyIG5ld3NfbGlzdF9sZW5ndGggPSBNYXRoLm1pbihkYXRhLmxlbmd0aCwgMylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzX2xpc3RfbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IGRhdGFbaV07XG4gICAgdmFyIGh0bWwgPSBgXG48YSBocmVmPVwiJHtlbGVtZW50W1wicGVybWFsaW5rXCJdfVwiIGNsYXNzPVwidG9wLS1uZXdzX19ib3hcIj5cbjxkaXYgY2xhc3M9XCJ0b3AtLW5ld3NfX2JveC0taW5uZXJcIj5cbjxwIGNsYXNzPVwidG9wLS1uZXdzX19kYXRlXCI+PHNwYW4+JHtlbGVtZW50LmRhdGV9PC9zcGFuPlVQPC9wPlxuPHAgY2xhc3M9XCJ0b3AtLW5ld3NfX3RpdGxlXCI+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPiR7ZWxlbWVudC50aXRsZX08L3NwYW4+PC9wPlxuPGRpdiBjbGFzcz1cInRvcC0tbmV3c19fdGh1bWJcIj48aW1nIHNyYz1cIiR7ZWxlbWVudC50aHVtYm5haWx9XCIgYWx0PVwiXCI+PC9kaXY+XG48L2Rpdj5cbjwvYT5cbmBcbiAgICAkKFwiI3RvcF9uZXdzXCIpLmFwcGVuZChodG1sKTtcbiAgfVxufTtcblxucmVxdWVzdC5zZW5kKCk7Il19
