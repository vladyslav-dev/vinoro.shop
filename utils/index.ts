export const getCurrentRange = (range) => {
    switch (range) {
        case "lg":
            return {
                gridTemplateColumns: `repeat(4, 1fr)`
            }
        case "md":
            return {
                gridTemplateColumns: `repeat(5, 1fr)`
            }
        case "sm":
            return {
                gridTemplateColumns: `repeat(6, 1fr)`
            }
        default:
            return {
                gridTemplateColumns: `repeat(5, 1fr)`
            }
    }
}
