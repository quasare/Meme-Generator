//Initialize Variables for Dom elements
const form = document.querySelector('.meme-form');
const urlInput = document.querySelector('input[name="url"]')
const topInput = document.querySelector('input[name="top"]')
const bottomInput = document.querySelector('input[name="bottom"]')
const results = document.querySelector('#results');

//Event to reate new meme and reset form
form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const newMeme = makeMeme(urlInput.value, topInput.value, bottomInput.value)
    results.prepend(newMeme)
    urlInput.value = '';
    topInput.value = '';
    bottomInput.value = '';
})

//Function to take form input values and create meme elements then appeend to Dom
const makeMeme = (url, top, bottom) => {
    //Creating new meme and elements with remove button
    const meme = document.createElement('div')
    meme.classList.add('MemeWrapper')
    const img = document.createElement('img')
    img.setAttribute('src', `${url}`)
    const toptext = document.createElement('h4')
    toptext.classList.add('top-text')
    toptext.innerText = `${top}`;
    const bottomText = document.createElement('h4')
    bottomText.classList.add('bottom-text')
    bottomText.innerText = `${bottom}`;
    const removeBtn = document.createElement('button')
    const p = document.createElement('p')
    removeBtn.innerText = 'Delete'
    removeBtn.classList.add('remove')

    //Adding listener to remove btn to remove meeme from page
    removeBtn.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
    })

    //Addding the meme to DOM
    p.appendChild(removeBtn)
    meme.appendChild(img)
    meme.appendChild(toptext)
    meme.appendChild(bottomText)
    meme.appendChild(p)
    return meme
}