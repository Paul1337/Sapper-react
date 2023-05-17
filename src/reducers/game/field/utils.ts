export const mix2dArray = (array: Array<Array<any>>) => {
    if (array.length === 0 || array[0].length === 0) return;
    const m = array.length;
    const n = array[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const t = array[i][j];
            const iRan = Math.floor(Math.random() * m);
            const jRan = Math.floor(Math.random() * n);
            array[i][j] = array[iRan][jRan];
            array[iRan][jRan] = t;
        }
    }
};
