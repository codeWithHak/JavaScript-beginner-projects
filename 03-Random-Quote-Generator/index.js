const quotes = [
"na kisi ki aankh ka noor hu, na kisi ke dil ka qarar hu",
"har aik baat pe kehte ho tum ke tu kiya he, tu hi bata ye andaaz-e-guftugu kiya he",
"hua shah ka musahib phirey he itrata, wagarna sheher me ghalib ki aabru kiya he",
"gheron ka to koi teer na pohancha mujh tak, khayal karna abke kamaan mere yaar ke haath me he",
"mujhse milne aey hen? tehriye bulakar laata hu"]


const p = document.getElementById("quote");
const usedQuotes = new Set()

function generateQuote(){
    if(usedQuotes.size >= quotes.length){
        usedQuotes.clear()
        alert("Quotes Finished")
    }

    while(true){
        const randomQuote = Math.floor(Math.random()*quotes.length)
    if(usedQuotes.has(randomQuote)) continue
    const quote = quotes[randomQuote];
    p.innerHTML = quote
    usedQuotes.add(randomQuote)
    break
}

}




































































// const usedQuotes = new Set()
// const quoteElement = document.getElementById('quote')

// function generateQuote(){

//     if(usedQuotes.size >= quotes.length) {
//         usedQuotes.clear()
//         alert("Repeating")
//     }

//     while (true) {  

//        const random = Math.floor(Math.random()*quotes.length)
    
//        if(usedQuotes.has(random)) continue            
    
//        const quote = quotes[random]
//        quoteElement.innerHTML = quote
//        usedQuotes.add(random)
    
//     break
    
// }
//   }