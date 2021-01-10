class Utils {
    /**
     * @todo 默认时间30天
     * @param {*} key
     * @param {*} value
     */
    setCookie(key, value, days = 30) {
        const exp = new Date()
        exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
        document.cookie = `${key}=${escape(value)};expires=${exp.toGMTString()}`
    }

    /**
     * @todo 获取cookie
     * @param {*} key
     */
    getCookie(key) {
        let arr
        const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`) // 正则匹配
        /* eslint-disable no-cond-assign */
        if ((arr = document.cookie.match(reg))) {
            return unescape(arr[2])
        }
        return null
    }

    /**
     * @todo 删除cookie
     * @param {*} key
     */
    delCookie(key) {
        const exp = new Date()
        exp.setTime(exp.getTime() - 1)
        const cval = this.getCookie(key)
        if (cval != null) {
            document.cookie = `${key}=${cval};expires=${exp.toGMTString()}`
        }
    }
}

export default new Utils()