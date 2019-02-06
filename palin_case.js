
let stdin = process.openStdin()
const main = () => {
  console.log('Enter a Palindrome : ')
  stdin.addListener("data",(word) => {
    checkPalindrom(word.toString().trim())
    stdin.destroy()
  })
}

function checkPalindrom(palindrom){
   var value = true;
   var j = 0;
    for( var i = palindrom.length-1; i > palindrom.length / 2; i-- )
    {
        if( palindrom[i] != palindrom[j] )
        {
           value = false
           break // why this? It'll exit the loop at once when there is a mismatch.
        }
        j++
    }
  if( value ) {
  console.log('the word is palindrome.')
  }
  else {
console.log('the word is not palindrome.')
  }
}

main()
