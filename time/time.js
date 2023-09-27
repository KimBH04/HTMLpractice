var target = document.getElementById('time')

function time()
{
    var d = new Date()
    var hour = d.getHours() + ''
    var minute = d.getMinutes() + ''
    var second = d.getSeconds() + ''
    var millisecond = d.getMilliseconds() + ''

    target.innerHTML = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')}.${millisecond.padStart(3, '0')}`
}
time()
setInterval(time, 1)