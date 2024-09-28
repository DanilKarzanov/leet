function numberOfAlternatingGroups(colors: number[]): number {
    let res = 0

    for (let i = 0; i < colors.length; i++) {
        if (colors.at(i - 1) !== colors.at(i) && colors.at(i === colors.length - 1 ? 0 : i + 1) === colors.at(i - 1)) {
            res++
        }
    }

    return res
};