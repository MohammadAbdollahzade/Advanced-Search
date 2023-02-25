search.addEventListener('keyup',()=>{
    let searchValue = search.value 
    
    if (searchValue) {
        boxSearch.style.borderRadius = '1rem 1rem 0 0' 
        boxHistory.style.display = 'block'
        let filteredWords
        filteredWords = suggestions.filter(word=>{
            return word.toLowerCase().startsWith(searchValue.toLowerCase())
        })

        if (filteredWords == 0) {
            filteredWords = suggestions.filter(word=>{
                return word.toLowerCase().includes(searchValue.toLowerCase())
            })
        }

        suggestionsWordsGenerator(filteredWords)

    }else{
        boxSearch.style.borderRadius = '1rem' 
        boxHistory.style.display = 'none'
    }
})

function suggestionsWordsGenerator(wordsArray) {
    let listItemsArray = wordsArray.map(word=>{
        return '<li>' + word + '</li>'
    })

    let customListItem

    if (!listItemsArray.length) {
        customListItem = '<li>' + search.value + '</li>'
    }else{
        customListItem = listItemsArray.join('')
    }

    boxHistory.innerHTML = customListItem
    select()
}


function select() {
    let allListItems = boxHistory.querySelectorAll('li')
    allListItems.forEach(wordItem => {
        wordItem.addEventListener('click',(event)=>{
            search.value = event.target.textContent
            boxSearch.style.borderRadius = '1rem' 
            boxHistory.style.display = 'none'
        })
    });
}