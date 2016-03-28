var CoffeyTech;
(function (CoffeyTech) {
    var Google_API_KEY = 'AIzaSyC6KhwfrD0o1Tq5_QXp7p12v7BPwlxS40Y';
    var Page = (function () {
        function Page() {
        }
        Page.togglePowerButton = function () {
            var fn = document.body.classList.contains('power-off')
                ? 'remove'
                : 'add';
            document.body.classList[fn]('power-off');
        };
        Page.init = function () {
            var powerButton = document.querySelector(".logo > img:nth-child(2)");
            powerButton.onclick = Page.togglePowerButton;
        };
        return Page;
    }());
    CoffeyTech.Page = Page;
})(CoffeyTech || (CoffeyTech = {}));
CoffeyTech.Page.init();
//# sourceMappingURL=coffeytech.js.map