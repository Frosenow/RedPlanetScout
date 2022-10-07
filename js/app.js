const dataValue = document.getElementById('date')
const submitBtn = document.getElementById('submit')
const errorNode = document.querySelectorAll('.error')

submitBtn.addEventListener('click', getData)

class MarsPhotoFactory{
    constructor(roverName, launchDate, landingDate, solDate, EarthDate, cameraName, cameraFullname, imgSrc){
        Object.assign(this, {roverName, launchDate, landingDate, solDate, EarthDate, cameraName, cameraFullname, imgSrc})
    }
}

function getData(){
    cleanErros()
    const date = dataValue.value; 
    url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=BaSkFJweXvzvk2h3BKAWjEO26MYy2SWSgKf2i2jG`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(!checkData(data)){
            let msg = 'No photos found on that day';
            generateErrorMsg(msg, 0)
            return; 
        }
        console.log(data)
        const properties = data.photos[0]
        const Photo1 = new MarsPhotoFactory(properties.rover.name, properties.rover.launch_date, properties.rover.landing_date, properties.sol, properties.earth_date, properties.camera.name, properties.camera.full_name, properties.img_src)
        console.log(Photo1)
    })
    .catch(err => console.log(err))
    
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