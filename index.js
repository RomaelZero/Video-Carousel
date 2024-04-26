const imageArray = Array.from(document.querySelectorAll("li"));
const video = document.querySelector("video");
console.log(video.src);

imageArray.map((image,index)=>{
    image.addEventListener("click", ()=>{
        console.log(`image ${index+1} was clicked`);
        video.src = `./Videos/video${index+1}.mp4`;
        console.log(video.src);
        
    })
});

