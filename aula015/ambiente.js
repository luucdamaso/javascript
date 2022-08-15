let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort() //tem que por em ordem depois de adicionar todos os valores ao vetor
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 4 esta na posição ${pos}`)
}
