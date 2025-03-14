export default {
    // 时间戳格式化
    getLocalTime(t) {
        function checkAddZone (num) {
            return num<10 ? '0' + num.toString() : num
        }

        if (!t) return ''
        t = Number(t)
        t = new Date(t).getTime()
        t = new Date(t)
        var year = t.getFullYear()
        var month = (t.getMonth() + 1)
        month = checkAddZone(month)
       
        var date = t.getDate()
        date = checkAddZone(date)
       
        var hour = t.getHours()
        hour = checkAddZone(hour)
       
        var min = t.getMinutes()
        min = checkAddZone(min)
       
        var se = t.getSeconds()
        se = checkAddZone(se)
       
        return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + se;
      }
}