function grid(init: number, percent: number, max: number): number {
    let result = init;
    for (let i = 0; i < max; i++) {
        result = result * (100 - percent) / 100
        console.log('i: ' + i);
        console.log('result: ' + result);
    }
    return result;
}

console.log(grid(60000, 0.5, 1000));

