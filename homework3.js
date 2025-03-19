// 실습3
const input = prompt("가위, 바위, 보 중 하나를 고르세요");
const random_num = Math.random();
let computerputer = "";

if (random_num < 0.3) {
    computer = "가위";
} else if (random_num < 0.6) {
    computer = "바위";
} else {
    computer = "보";
}

if (input == "가위") {
    if (computer == "가위") {
        alert("비겼습니다!");
    } else if (computer == "바위") {
        alert("당신이 졌습니다. 승자는 컴퓨터입니다.");
    } else {
        alert("당신이 이겼습니다!!");
    }
}
if (input == "바위") {
    if (computer == "가위") {
        alert("당신이 이겼습니다!!");
    } else if (computer == "바위") {
        alert("비겼습니다!");
    } else {
        alert("당신이 졌습니다. 승자는 컴퓨터입니다.");
    }
}
if (input == "보") {
    if (computer == "가위") {
        alert("당신이 졌습니다. 승자는 컴퓨터입니다.");
    } else if (computer == "바위") {
        alert("당신이 이겼습니다!!");
    } else {
        alert("비겼습니다!");
    }
}
