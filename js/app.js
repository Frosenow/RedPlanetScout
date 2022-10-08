const dataValue = document.getElementById('date')
const submitBtn = document.getElementById('submit')
const errorNode = document.querySelectorAll('.error')


submitBtn.addEventListener('click', getData)

class MarsPhotoFactory{
    constructor(photoId, roverName, launchDate, landingDate, solDate, earthDate, cameraName, cameraFullname, imgSrc){
        Object.assign(this, {photoId, roverName, launchDate, landingDate, solDate, earthDate, cameraName, cameraFullname, imgSrc})
    }
}

function getData(){
    cleanErros()
    const date = dataValue.value;
    const rover = document.getElementById('rover')
    console.log(rover.value) 
    
    url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.value}/photos?earth_date=${date}&api_key=BaSkFJweXvzvk2h3BKAWjEO26MYy2SWSgKf2i2jG`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.photos)
        cleanElements(document.querySelector('.photo-container'))
        if(!checkData(data)){
            let msg = 'No photos found on that day';
            generateErrorMsg(msg, 0)
            return; 
        }
        data.photos.forEach(photo => {
            const photoObj = new MarsPhotoFactory(photo.id, photo.rover.name, photo.rover.launch_date, photo.rover.landing_date, photo.sol, photo.earth_date, photo.camera.name, photo.camera.full_name, photo.img_src)
            createSection(photoObj)
        })
    })
    .catch(err => console.log(err))
    
}

function cleanElements(parentElement){
    while(parentElement.firstChild){
        parentElement.firstChild.remove();
    }
}

function createSection(photoObj){
    console.log(photoObj.imgSrc)
    const sectionElement = document.querySelector('.photo-container')

    const container = document.createElement('div')
    container.classList.add('container')
    sectionElement.appendChild(container)

    const imgSection = document.createElement('section')
    imgSection.classList.add('img-section')
    container.appendChild(imgSection)

    const imgElement = document.createElement('img')
    imgElement.src = photoObj.imgSrc
    imgSection.appendChild(imgElement)

    const aboutSection = document.createElement('section')
    aboutSection.classList.add('about-section')
    container.appendChild(aboutSection)
    aboutSection.innerHTML = 
    `<ul>
    <li>Rover Name: ${photoObj.roverName}</li>
    <li>Earth Date: ${photoObj.earthDate}</li>
    <li>Camera Name: ${photoObj.cameraName} - ${photoObj.cameraFullname}</li>
    <li>Sol: ${photoObj.solDate}</li>
    </ul>`
}

function checkData(data){
    if(data.photos.length === 0)
        return 0; 
    else 
        return 1; 
}

function generateErrorMsg(msg, errNum){
    errorNode[errNum].innerText = msg; 
}

function cleanErros(){
    errorNode.forEach(error => error.innerText = '')
}