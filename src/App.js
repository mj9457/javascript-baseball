const { MissionUtils } = require("@woowacourse/mission-utils");

class App {

    constructor() {
        this.computerNumber = [];
        this.gamePlayerNumber = [];
    }

    play() {
        
    }

    createRandomNumber() {
        const randomNumberList = [];
        while (computer.length < 3) {
            const randomnumber = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!randomNumberList.includes(randomnumber)) {
                    randomNumberList.push(randomnumber);
            }
        }
    }

    gameStartTextPrint() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }

    inputNumber() {
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ",(NUMBER_ENTERED) => {
            if(this.inputNumberIsValid(NUMBER_ENTERED)) {
                const number_converted_letter = toString(NUMBER_ENTERED);
                const letter_converted_number = number_converted_letter.split('').map((letter) => Number(letter))
                this.gamePlayerNumber.push(letter_converted_number);
            } else {
                throw "3개의 중복되지않는 숫자를 입력해주세요. 게임 종료";
            }
        })
    }   

    inputNumberIsValid(inputNumber) {
        if(toString(inputNumber).length !==3 || isNaN(inputNumber) || new Set(inputNumber).size !== 3) {
            return false;
        }
        return true;
    }

    countStrike() {
        let strikeCount = 0;
        this.gamePlayerNumber.forEach((number,index) => {
            if(this.computerNumber.includes(number)) {
                if(this.computerNumber[index] === number) {
                    strikeCount++;
                } 
            }
        })

        if(strikeCount !== 0) {
            return (`${strikeCount}스트라이크`);
        }
    }

    countBall() {
        let ballCount = 0;
        this.gamePlayerNumber.forEach((number,index) => {
            if(this.computerNumber.includes(number)) {
                if(this.computerNumber[index] !== number) {
                    ballCount++;
                } 
            }
        })

        if(ballCount !== 0) {
            return (`${ballCount}볼`);
        }
    }

    printHintMessage() {
        let hintArr = [];
        hintArr.push(this.countBall());
        hintArr.push(this.countStrike());

        if(hintArr.length === 0) {
            hintArr.push("낫싱");
        }
        
        MissionUtils.Console.print(hintArr.join(" "));
        return hintArr;
    }
}

module.exports = App;