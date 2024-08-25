function maxProfit(prices: number[]): number {
    let cheapestPrice: number = prices[0]
    let currentDelta: number = 0

    prices.forEach((price, id) => {
        if (price < cheapestPrice) {
            cheapestPrice = price
        } else {
            if (price - cheapestPrice > currentDelta) {
                currentDelta = price - cheapestPrice
            }
        }
    })

    return currentDelta
};