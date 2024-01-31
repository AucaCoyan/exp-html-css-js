export function main() {
    let response = calculateDistinctDifferences([2, 5.1, 2, 7, 4]);
    console.log(response);
}

main();

// you can't differenciate number from integer, to JS it's all the same. Sad
function calculateDistinctDifferences(array: number[]): number {
    let differences: number[] = [];

    let idx = 0;
    while (idx < array.length - 1) {
        // console.log(`step ${idx}`);
        let diff = Math.abs(array[idx + 1] - array[idx]);
        // console.log(
            // `doing ${array[idx + 1]} - ${array[idx]} = absolute ${Math.abs(diff)}`,
        // );

        if (!differences.includes(diff)) {
            differences.push(diff);
        }
        idx++;
    }

    return differences.length;
}

type Letter =
    | "a"
    | "b"
    | "c"
    | "d"
    | "e"
    | "f"
    | "g"
    | "h"
    | "i"
    | "j"
    | "k"
    | "l"
    | "m"
    | "n"
    | "o"
    | "p"
    | "q"
    | "r"
    | "s"
    | "t"
    | "u"
    | "v"
    | "w"
    | "x"
    | "y"
    | "z";
type UppercaseLetter = Uppercase<Letter>;

function count(array: string[], char: Letter | UppercaseLetter): number {
    let count = 0;

    for (let idx = 0; idx < array.length; idx++) {
        if (array[idx] == char) {
            count++;
        }
    }
    return count;
}

function stripBananas(text: string): number {
    let textArray = text.split("");
    let Bs = count(textArray, "B");
    let As = Math.floor(count(textArray, "a") / 3);
    let Ns = Math.floor(count(textArray, "N") / 2);

    return Math.min(Bs, As, Ns);
}

export const _private = { calculateDistinctDifferences, stripBananas };
