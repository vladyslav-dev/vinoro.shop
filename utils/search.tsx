import { COLORS } from "../constants/colors";

export const highlight = (searchValue: string, string: string): any => {
    if(!string) return string
    const regexp = new RegExp(searchValue, 'ig')
    const matchedValue = string.match(regexp)
    if(matchedValue) {
      return string.split(regexp).map((symbol: any, index, array) => {
        if(index < array.length - 1) {
          const firstMatch = matchedValue.shift();
          return (
           <span>{symbol}<span style={{ fontWeight: 700, color: COLORS.COLOR_COD_GRAY }}>{firstMatch}</span></span>
          )
        }
        return symbol
      })
    }
    return string
}