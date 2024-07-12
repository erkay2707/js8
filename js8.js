const url10 = 'https://api.thedogapi.com/v1/images/search?limit=10'
const url = ' https://api.thedogapi.com/v1/images/search'
const breedsUrl = ' https://api.thedogapi.com/v1/breeds'
const breedImgUrl = 'https://api.thedogapi.com/v1/images/search?limit=10'

const byDogs = document.querySelector('#byDogs')
const byDog = document.querySelector('#byDog')
const selectBreeds = document.querySelector('#select')
const dog = document.querySelector('#dog')
const row = document.querySelector('#row')

let breedsArr = []

fetch(breedsUrl)
    .then(res => res.json())
    .then(data => {
        breedsArr = data
        selectBreeds.innerHTML = data.map(breed => {
            return `
            <option value=${breed.id}>${breed.name}</option>
            `
        })
    })


selectBreeds.addEventListener('change', (event) => {
    fetch(breedImgUrl + event.target.value)
        .then(res => res.json())
        .then(data => {
            const currentBreed = breedsArr.find(el => el.id === +event.target.value);
            console.log(currentBreed, 'DOG')
            console.log(breedsArr)
            console.log(event.target.value)
            return dog.innerHTML = `
            <img src="${data[0].url}" class="img-fluid" alt=""/>
            <div>
            <h2>${currentBreed.name}</h2>
            <p>${currentBreed?.description ? currentBreed?.description: ''}</p>
            <p>${currentBreed.country_code ? currentBreed?.country_code: ''}</p>
            </div>
            `
        })
})


byDogs.addEventListener('click', () => {
    fetch(url10)
        .then(res => res.json())
        .then(data => {
            row.innerHTML = data.map(cat => {
                return `
            <div class = "col-4">
                <div>
                     <img src="${cat.url}" class="img-fluid" alt=""/>
                </div>
            </div>
            `
            }).join('')
        })
})


byDog.addEventListener('click', () => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            row.innerHTML = data.map(dog => {
                return `
            <div class = "col-4">
                <div>
                     <img src="${dog.url}" class="img-fluid" alt=""/>
                </div>
            </div>
            `
            }).join('')
        })
})