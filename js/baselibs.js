function setimageSizeToField(file, textField, callback) {
    var img = new Image();
    var _URL = window.URL;
    img.src = _URL.createObjectURL(file);
    img.onload = function () {
        var imgWidth = this.width;
        var imgHeight = this.height;
        callback({width: imgWidth, height: imgHeight}, textField)
    }
}

function patchUploadedFileNames() {
    $("#compare-form").find("input[type=file]").on('change', function () {
        var fileName = $(this).val();
        $(this).next('.custom-file-label').html(fileName);
    })
}