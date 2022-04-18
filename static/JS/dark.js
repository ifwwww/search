// 深色主题
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
}
window.matchMedia("(prefers-color-scheme: dark)").addListener(listeners.dark);
window.matchMedia("(prefers-color-scheme: light)").addListener(listeners.light);
