
/* 移除字符串的前后空格 */
function trim(str) {
    console.log(str);
    return str.toString().replace(/^\s+|\s+$/g, '');
}

export { trim }