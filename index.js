const imageArray = Array.from(document.querySelectorAll("li"));
const video = document.querySelector("video");
console.log(video.src);

const videoUrl = [
    "https://firebasestorage.googleapis.com/v0/b/video-carousel-d5a09.appspot.com/o/video1.mp4?alt=media&token=26325442-ee99-4615-bcb7-5fde0c6ae697",
    "https://firebasestorage.googleapis.com/v0/b/video-carousel-d5a09.appspot.com/o/video2.mp4?alt=media&token=feb492b6-226c-4b98-b9e2-b9a0b4cf58df",
    "https://firebasestorage.googleapis.com/v0/b/video-carousel-d5a09.appspot.com/o/video3.mp4?alt=media&token=e341c09e-2d95-45c0-bc41-1d0a18e4d62d",
    "https://firebasestorage.googleapis.com/v0/b/video-carousel-d5a09.appspot.com/o/video4.mp4?alt=media&token=a1087057-ccc2-4c4d-a459-c9bf5e9dbec7"
];

imageArray.map((image,index)=>{
    image.addEventListener("click", ()=>{
        console.log(`image ${index} was clicked`);
        video.src = `${videoUrl[index]}`;
        console.log(video.src);
        
    })
});

