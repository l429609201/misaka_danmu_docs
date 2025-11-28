/**
 * init
 */
(() => {
    try {
        // 去除后缀 .html
        let pathname = location.pathname;
        if (pathname.endsWith(".html")) {
            location.pathname = pathname.substring(0, pathname.length - 5);
            return
        }
    } catch (_) {
    }
})()
