const form = document.querySelector('.meme-form');
const urlInput = document.querySelector('input[name="url"]')
const topInput = document.querySelector('input[name="top"]')
const bottomInput = document.querySelector('input[name="bottom"]')
const results = document.querySelector('#results');

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const newMeme = makeMeme(urlInput.value, topInput.value, bottomInput.value)
    results.prepend(newMeme)
    urlInput.value = '';
    topInput.value = '';
    bottomInput.value = '';
})

const makeMeme = (url, top, bottom) => {
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
    removeBtn.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
    })
    p.appendChild(removeBtn)
    meme.appendChild(img)
    meme.appendChild(toptext)
    meme.appendChild(bottomText)
    meme.appendChild(p)
    return meme
}