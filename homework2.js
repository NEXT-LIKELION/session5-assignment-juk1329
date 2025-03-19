// 실습2
let blank = " ";
let star = "*";
for (let i = 1; i <= 5; i++) {
    let blank_tmp = blank.repeat(5 - i);

    cnt = i * 2 - 1;
    let star_tmp = star.repeat(cnt);

    console.log(blank_tmp + star_tmp);
}
