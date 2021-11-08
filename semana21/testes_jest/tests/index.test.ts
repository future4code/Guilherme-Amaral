import { isEven } from "../src"

describe ("aula introdutória de testes", () => {
    
    test ("isEven",  () => {

        expect(isEven(2)).toBe(true)
        expect(isEven(3)).toBe(false)
        expect(isEven(3.5)).toBe(false)
    })

    test ("exemplos de sintaxe", () => {
        expect("bananinha").toBe("bananinha")
        //expect({}).toEqual({})
        expect(10*29).toBeGreaterThan(5)
        expect(10+-29).toBeLessThanOrEqual(5)
        expect([1,2,3,4,5,6,7,8,9]).toContain(3+2)
        expect([
            [1,2], 
            [3,4]
        ]).toContainEqual([3,4])

        expect(4*19).not.toEqual(7)
        
    })

    test ("assicronicidade", () => {

    })
})