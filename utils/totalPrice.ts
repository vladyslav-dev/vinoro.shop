export const totalPrice = (products) => {
    let price = products.reduce((acc, el) => {
        acc += el.cost * el.quantity
        return acc
    }, 0)
    return price 
}