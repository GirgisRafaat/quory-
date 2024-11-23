var quotes = [
    {quote:`"Do not take life too seriously. You will not get out alive." `, author :"--Elbert Hubbard" },
    {quote:`"Resentment is like drinking poison and waiting for your enemies to die."`, author :"--Nelson Mandela" },
    {quote:`"It's not what happens to you, but how you react to it that matters."` , author :"--Epictetus" },
    {quote:`"You miss 100% of the shots you don't take."` , author :"--Wayne Gretzy " },
    {quote:`"The best revenge is massive success."` , author :"--Frank Sinatra" }
]
function getRandumQuotes(){
    var randomIndex = Math.floor(Math.random()*quotes.length) ;
    document.getElementById('demo').innerHTML = quotes[randomIndex].quote ;
    document.getElementById('dimo').innerHTML = quotes[randomIndex].author ;
}