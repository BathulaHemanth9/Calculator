function test(num) {
    document.getElementById('screen').value += num
}
function equl(num) {
    document.getElementById('screen').value = eval(document.getElementById('screen').value)
}
function del() {
    var num = document.getElementById("screen").value.slice(0, -1)
    document.getElementById("screen").value = num
}

function sqrt() {
    document.getElementById("screen").value=Math.sqrt(document.getElementById("screen").value )
    
}  