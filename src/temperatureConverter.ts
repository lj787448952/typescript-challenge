/**
 * 將攝氏溫度轉換為華氏溫度
 * @param celsius - 攝氏溫度
 * @returns 華氏溫度
 */


// 華氏溫度 = (攝氏溫度 * 9/5) + 32

export function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32
}