var count = 0

function display() {
    document.getElementById('count').innerHTML = count;
}

function debug(c) {
    count = c
    display()
}

function up() {
    count++
    display()
}

function down() {
    count--
    display()
}