(function () {
    let paBody = document.body
        , paHtml = document.documentElement
        , paMaxY = Math.max(paBody.scrollHeight, paBody.offsetHeight, paHtml.clientHeight, paHtml.scrollHeight, paHtml.offsetHeight) - window.innerHeight
        , paBreakPoint = 300;

    if (window.scrollY > paBreakPoint || paBreakPoint >= paMaxY && window.scrollY != 0) {
        window.scroll({ top: 0, behavior: 'smooth' });
    } else {
        window.scroll({ top: paMaxY, behavior: 'smooth' });
    }
})();
