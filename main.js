let userName = prompt("Ismingizni kiriting:");
let userTime = prompt("Hozirgi yilni kiriting:");
let userYear = prompt("Tug'ilgan yilingizni kiriting:");

if (isNaN(userTime) || isNaN(userYear)) {
    alert("Iltimos, to'g'ri yilni kiriting!");
} else {
    let yosh = userTime - userYear;
    alert(userName + ", yoshingiz " + yosh);
}
