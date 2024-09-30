/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let size = s.length;
    let st = [];

    if (size === 1) return false;

    for (let i = 0; i < size; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            st.push(s[i]);
        } else {
            if (st.length === 0) return false;
            if ((s[i] === ')' && st[st.length - 1] === '(') ||
                (s[i] === '}' && st[st.length - 1] === '{') ||
                (s[i] === ']' && st[st.length - 1] === '[')) {
                st.pop();
            } else {
                return false;
            }
        }
    }
    return st.length === 0;
};

module.exports = { isValid };


