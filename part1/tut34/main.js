// ----------------------------- sort method in array -----------------------------------------------

// ************** MOST IMPORTANT -> sort method change original array

// ----- ASCII TABLE
/*
char : ascii value

'0' : 48
'1' : 49
'2' : 50
'3' : 51
'4' : 52
'5' : 53
'6' : 54
'7' : 55
'8' : 56
'9' : 57


':' : 58
';' : 59
'<' : 60
'=' : 61
'>' : 62
'?' : 63
'@' : 64


'A' : 65
'B' : 66
'C' : 67
'D' : 68
'E' : 69
'F' : 70
'G' : 71
'H' : 72
'I' : 73
'J' : 74
'K' : 75
'L' : 76
'M' : 77
'N' : 78
'O' : 79
'P' : 80
'Q' : 81
'R' : 82
'S' : 83
'T' : 84
'U' : 85
'V' : 86
'W' : 87
'X' : 88
'Y' : 89
'Z' : 90



'[' : 91
'\' : 92
']' : 93
'^' : 94
'_' : 95
'`' : 96



'a' : 97
'b' : 98
'c' : 99
'd' : 100
'e' : 101
'f' : 102
'g' : 103
'h' : 104
'i' : 105
'j' : 106
'k' : 107
'l' : 108
'm' : 109
'n' : 110
'o' : 111
'p' : 112
'q' : 113
'r' : 114
's' : 115
't' : 116
'u' : 117
'v' : 118
'w' : 119
'x' : 120
'y' : 121
'z' : 122
'{' : 123
'|' : 124
'}' : 125

*/

// ------------- sort number

let arr = [31,400,1,1000,250,20,300]
arr.sort()
// note - expected result -> [1,20,31,300,400,1000]
// note - reality -> [1,1000,20,250,300,31,400]
// console.log(arr)  


/*------**************  note -- upper sort method show diffrent behaviour
1 --- array value convert in string because when we use sort method ,sort method array value convert to string --> ["1","20","31","300","400","1000"]

2 --- check first letter and compare with the ascil value of the first letter , we already write ascil value of top

3 --- compare with ascil value with first latter and if any two letter same then check second letter
    '0' : 48
    '1' : 49
    '2' : 50
    '3' : 51
    '4' : 52
    '5' : 53
    '6' : 54
    '7' : 55
    '8' : 56
    '9' : 57
              ["1","2","31","30","4","10"]
ascil value - [49,50,51,51,52,49]  

4 --- final result sort method using ascil value

    print-->    [1, 1000, 20,250,  300, 31,400]

*/



//note- so if you want sort number in ascinding order then use callback function in sort method
// let arr1 = [31,400,1,1000,250,20,300]
// arr1.sort((a,b)=>{
//     return a-b
// })
// console.log(arr1)

// --- desanding order
// let arr2 = [31,400,1,1000,250,20,300]
// arr2.sort((a,b)=>{
//     return b-a
// })
// console.log(arr2)



// ---------- sort charector

// when use sort method on charector then sort in alphabetical order

// let car = ['ravi','shiv','vashit','apple']
// car.sort()
// console.log(car)



// if lowercase charactor and uppercase charector present then first preferenc is uppercase 

// let upperCar = ['RAVI','BANANA','ORANGE']
// upperCar.sort()
// console.log(upperCar)

// let mixcar = ['RAVI','apple','mango','BANANA']
// mixcar.sort()
// console.log(mixcar)

// note ---- mix sort mean - number ,uppercase , lowercase then sort using ascil value
// let mix_car_with_num = ['RAVI','apple',23,'mango',1,400,31,'BANANA',55]
// mix_car_with_num.sort()
// console.log(mix_car_with_num)


// ------------------ ************ REAL LIFE EXAMPLE OF SORT METHOD WITH ASCINDING ORDER/DESCINDING ORDER

// below we can sort using sort method but remember here sort method change original array , many time we can want change original array so we clone array and use sort method in clone array
const products = [
    {productId:1,produceName:"p1",price:300},
    {productId:2,produceName:"p2",price:20},
    {productId:3,produceName:"p3",price:400},
    {productId:4,produceName:"p1",price:1000},
    {productId:5,produceName:"p1",price:500},


]

products.sort((a,b)=>{
    return a.price-b.price
})
// console.log(products)


// clone array using slice method and use sort method of new array 
const products2 = [
    {productId:1,produceName:"p1",price:300},
    {productId:2,produceName:"p2",price:20},
    {productId:3,produceName:"p3",price:400},
    {productId:4,produceName:"p1",price:1000},
    {productId:5,produceName:"p1",price:500},


]
// -- ascinding order
let lowtohign = products.slice(0)
lowtohign.sort((a,b)=>{
    return a.price-b.price
})

// console.log(lowtohign)

// -- dscinding order
// let highTolow = products.slice(0)
let highTolow = products.slice(0).sort((a,b)=>{
    return (b.price)-(a.price)
})

// console.log(highTolow)
