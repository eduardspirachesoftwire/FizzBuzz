// This is our main function
function fizzbuzz(n:number, rules:Array<number>): void {
    for (let i: number = 1; i < n; i++) {
        let output: string = "";
        if (i % 3 === 0 && rules.indexOf(3)) {
            output += "Fizz";
        }
        if (i % 5 === 0 && rules.indexOf(5)) {
            output += "Buzz";
        }
        if (i % 7 === 0 && rules.indexOf(7)) {
            output += "Bang";
        }
        if (i % 11 === 0 && rules.indexOf(11)) {
            output = "Bong";
            console.log(output);
            continue;
        }
        if (i % 13 === 0 && rules.indexOf(13)) {
            let index: number = output.indexOf("B");
            if (index === -1) {
                output += "Fezz";
            } else {
                output = output.slice(0, index) + "Fezz" + output.slice(index);
            }
        }
        if (i % 17 === 0) {
            let reversed: string = "";
            let positions = [];

            for (let i = 0; i < output.length; i++) {
                if (output[i].match(/[A-Z]/) != null) {
                    positions.push(i);
                }
            }

            for (let i = positions.length - 1; i >= 0; i--) {
                if (i === positions.length - 1) {
                    reversed += output.slice(positions[i]);
                } else {
                    reversed += output.slice(positions[i], positions[i + 1]);
                }
            }
            output = reversed;
        }
        if (output === "") {
            output += i;
        }
        console.log(output);
    }
}

let n:number = 0;
let rules:Array<number> = [];
let maxQueries:number = 5;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(type:string) {
    if (type === "limit") {
        readline.question('Please enter the limit: ', (limit: number) => {
            n = limit;
            console.log("Great! Now choose which rules should be implemented. (e.g. 3, 5, 7, 11, 13");
            getUserInput("rules");
        });
    }
    if (type === "rules") {
        readline.question('Rule to implement: ', (rule:number) => {
            maxQueries --;
            rules.push(rule);
            if (maxQueries === 0) {
                fizzbuzz(n, rules);
                readline.close();
            } else {
                getUserInput("rules");
            }
        });
    }
}

getUserInput("limit");
