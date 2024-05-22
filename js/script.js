function hasilKeliling() {
    let alas = document.getElementById("alas").value;
    let sisi1 = document.getElementById("sisi1").value;
    let sisi2 = document.getElementById("sisi2").value;

    let keliling = alas + sisi1 + sisi2;
    document.getElementById(
        "hasilsegitigakeliling"
    ).innerHTML = `keliling : <br> ${alas} + ${sisi1} + ${sisi2} = ${keliling}`;
}

function hasilLuas() {
    let bawah = document.getElementById("bawah").value;
    let tinggi = document.getElementById("tinggi").value;
    let luas = 0.5 * bawah * tinggi;

    document.getElementById(
        "luasHasil"
    ).innerHTML = `Luas: <br> ${0.5} * ${bawah} * ${tinggi} = ${luas}`;
}

document.querySelectorAll('a.scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
