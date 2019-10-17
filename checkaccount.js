let a =prompt("nhap ten tai khoan cua ban vao day: ");
 function checkaccount(a) {
    let regexp = /^[_a-z0-9]{6,14}$/;
    if (regexp.test(a)==true){
        return true;
    }return false;
}
if (checkaccount(a)==true){
    document.write("Tai khoan cua ban hop le")
} else {
    document.write("Tai khoan cua ban khong hop le")
}