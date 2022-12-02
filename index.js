let dobbel1 = [1, 2, 2, 2, 2, 6];
let dobbel2 = [1, 2, 2, 2, 2, 6];

let result = {};
let results = [];
const idealResult = { 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 5, 9: 4, 10: 3, 11: 2, 12: 1 };

ResetResult();

for (let i = 0; i < 4; i++) CheckPair(6 - i, 6 + i);

console.log('Results: ', results);

//function to set the count of all combinations in the variable result to 0
function ResetResult() {
    for (let i = 2; i < 13; i++) {
        result[i] = 0;
    }
}

//funtion to loop through all the combinations of 2 dice with the last number passed as parameters
function CheckPair(dobbel1Last, dobbel2Last) {
    dobbel1[5] = dobbel1Last;
    dobbel2[5] = dobbel2Last;

    loop: while (true) {
        CheckValid(dobbel1, dobbel2);

        dobbel2[4]++;

        const maxInterNumber1 = dobbel1[5] - 1;
        const maxInterNumber2 = dobbel2[5] - 1;

        for (let i = 4; i > 1; i--) {
            if (dobbel2[i] > maxInterNumber2) {
                dobbel2[i - 1]++;
            }
        }

        if (dobbel2[1] > maxInterNumber2) {
            for (let i = 1; i < 5; i++) dobbel2[i] = 2;
            dobbel1[4]++;
        }

        for (let i = 2; i < 5; i++) {
            if (dobbel2[i] > maxInterNumber2) {
                dobbel2[i] = dobbel2[i - 1];
            }
        }

        for (let i = 4; i > 1; i--) {
            if (dobbel1[i] > maxInterNumber1) {
                dobbel1[i - 1]++;
            }
        }
        for (let i = 2; i < 5; i++) {
            if (dobbel1[i] > maxInterNumber1) {
                dobbel1[i] = dobbel1[i - 1];
            }
        }

        if (dobbel1[1] > maxInterNumber1) {
            console.log(dobbel1, dobbel2);
            break loop;
        }
        console.log(dobbel1, dobbel2);
    }

    dobbel1 = [1, 2, 2, 2, 2, 6];
    dobbel2 = [1, 2, 2, 2, 2, 6];
}

//function to check wether 2 dice have the same chances to roll a given number as 2 normal dice
//if they do, they get added to results
function CheckValid(dobbel1, dobbel2) {
    ResetResult();
    for (const value1 of dobbel1) {
        for (const value2 of dobbel2) {
            const sum = value1 + value2;
            result[sum]++;
        }
    }
    for (const [key, value] of Object.entries(result)) {
        if (value != idealResult[key]) {
            return;
        }
    }
    console.log([dobbel1, dobbel2]);
    results.push([Array.from(dobbel1), Array.from(dobbel2)]);
}
