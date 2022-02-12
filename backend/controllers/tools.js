// Return bool  Password contain at least 6 character, 1 letter uppercase, 1 letter lowercase , 1 number ?
exports.isValidPassword = (password) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(password);
};
// Return bool
exports.isValidEmail = (email) => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        email
    );
};
// Email mask ( user1@gmail.com become uXXX1@gmail.com)
exports.maskEmail = (email) => {
    let str = email;
    str = str.split("");
    let finalArr = [];
    let len = str.indexOf("@");
    str.forEach((item, pos) => {
        pos >= 1 && pos <= len - 2
            ? finalArr.push("X")
            : finalArr.push(str[pos]);
    });
    let maskedEmail = finalArr.join("");
    return maskedEmail;
};