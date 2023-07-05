function solution(sticker) {
    let answer = 0;
    const n = sticker.length;

    if(n<1 || n>100000) return;

    const isEven = n%2 === 0 ? 0 : 1;
    const half = Math.floor(n/2) + isEven;

    const halfArr1 = sticker.slice(isEven, half);
    const halfArr2 = sticker.slice(half);

    halfArr1.map((item, idx) => {
        if(item>100 || halfArr2>100) return;

        if(answer > item + halfArr2[idx]){
            answer = item + halfArr2[idx];
        }
    });

    return answer;
}

solution([14, 6, 5, 11, 3, 9, 2, 10]);