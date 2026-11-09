let nilai = 0;

function tambah() {
    nilai++;
    document.getElementById("angka").innerHTML = nilai;
}

function reset() {
    nilai = 0;
    document.getElementById("angka").innerHTML = nilai;
}
