// Function to change the video in the main player
function changeVideo(videoId) {
    const iframe = document.getElementById('video');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
}
