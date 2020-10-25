module.exports = function check(str, bracketsConfig) {
    // your solution
    let temp = str;
    for (let i = 0; i < str.length; i++) {
        for (let br of bracketsConfig) {
            let fullBracket = br[0] + br[1];
            if (temp.includes(fullBracket))
                temp = temp.replace(fullBracket, "");
        }
    }

    if (temp.length > 0) return false;
    else return true;
};

/*
const config6 = [
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
    ["7", "7"],
    ["8", "8"],
];
module.exports(
    "111115611111111222288888822225577877778775555666677777777776622222",
    config6
);
*/

const config3 = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
];

module.exports("([{}])", config3);
