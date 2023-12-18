function downloadFiles() {
    var files = ["assets/download/pooja_magar_cv.pdf", "assets/download/cover_letter.pdf"];

    for (var i = 0; i < files.length; i++) {
        var link = document.createElement('a');
        link.href = files[i];
        link.download = files[i].split("/").pop();
        link.style.display = 'none';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }
}