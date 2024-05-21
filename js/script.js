function hasil() {
    let alas= document.getElementById(alas).value;
    let sisi1= document.getElementById(sisi1).value;
    let sisi2= document.getElementById(sisi2).value;

    let keliling= perseint(alas) + perseint(sisi1) + perseint(sisi2)
    document.getElementById(keliling).value=keliling;

    let hasilkeliling= document.getElementById("hasilkeliling");
}