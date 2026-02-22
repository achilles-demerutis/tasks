/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNums = [];
    if(numbers.length === 0){
        return [];
    }else if(numbers.length === 1){
        newNums.push(numbers[0])
        newNums.push(numbers[0]);
        return newNums;
    }else{
        newNums.push(numbers[0]);
        newNums.push(numbers[numbers.length-1]);
        return newNums;
    }
}
/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newNums = [];
    for(let i = 0; i < numbers.length; i++){
        newNums.push(numbers[i]*3);
    }
    return newNums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newNums = [];
    for(let i = 0; i < numbers.length; i++){
        let newInt = parseInt(numbers[i])
        if(isNaN(newInt)){
            newNums.push(0);
        }else{
            newNums.push(newInt);
        }
    }
    return newNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map(amt => {
        let parsed = parseInt(amt[0] === "$" ? amt.slice(1) : amt)
        return isNaN(parsed) ? 0 : parsed;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages.filter(message=>!message.endsWith("?")).map(message=>message.endsWith("!") ? message.toUpperCase(): message);   //bit confusing at first, but filters out questions
};                                                                                                                                  //and then maps messages to uppercase

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    for(let i = 0; i < words.length; i++){
        if(words[i].length < 4){
            count++;
        }
    }
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every((colors: string): boolean => colors === "red" || colors === "green" || colors === "blue");
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if(addends.length === 0){
        return "0=0";
    }
    let sum = addends.reduce((addends: number, num: number) => addends + num, 0);
    let returnStr = addends.join("+")
    return sum + "=" + returnStr;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let stopIndex = values.findIndex((values: number): boolean => values < 0);
    if(stopIndex === -1){
        let total = values.reduce((value, num) => value+num, 0);
        return [...values, total];                                  //just learned how to do this (unpacks values and adds total to the end)
    }
    let preNegative = values.slice(0, stopIndex).reduce((value, num) => value+num, 0);
    return [...values.slice(0, stopIndex+1),preNegative,...values.slice(stopIndex+1)];     //once again kind of confusing, but unpacks
                                                                                            //values up until the negative, then the negative, and
                                                                                            //then the values after the negative
}
