export const groupBy = (array, key) => {
    return array.reduce((acc, item) => {
        if (!acc[item[key]]) acc[item[key]] = []
        acc[item[key]].push(item)
        return acc
    }, {})
}