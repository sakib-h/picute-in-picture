const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select media file, pass to video element and play

const selectMediaStream = async () => {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia({});
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		// Catch error here
		console.log(error);
	}
};
button.addEventListener("click", async () => {
	button.disabled = true;

	await videoElement.requestPictureInPicture();

	button.disabled = false;
});
// On Load
selectMediaStream();
