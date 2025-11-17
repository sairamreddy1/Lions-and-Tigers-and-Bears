const breedSelect = document.getElementById('breed');
const dogImage = document.getElementById('dogImage');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playPauseBtn = document.getElementById('playPause');

let images = [];
let index = 0;
let playing = false;
let timer = null;

// Public Dog API endpoint commonly used: https://dog.ceo/api
async function fetchBreeds() {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await res.json();
    // data.message is object of breeds
    const breeds = Object.keys(data.message);
    populateBreeds(breeds);
  } catch (err) {
    console.error('Failed to fetch breeds', err);
  }
}

function populateBreeds(breeds) {
  breeds.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b;
    opt.textContent = b;
    breedSelect.appendChild(opt);
  });
}

async function fetchImagesForBreed(breed) {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await res.json();
    images = data.message || [];
    index = 0;
    showImage();
  } catch (err) {
    console.error('Failed to fetch images', err);
  }
}

function showImage() {
  if (!images.length) {
    dogImage.src = '';
    dogImage.alt = 'No images available';
    return;
  }
  dogImage.src = images[index];
  dogImage.alt = `Dog image ${index + 1} of ${images.length}`;
}

function nextImage() {
  if (!images.length) return;
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  if (!images.length) return;
  index = (index - 1 + images.length) % images.length;
  showImage();
}

function togglePlay() {
  if (playing) {
    clearInterval(timer);
    playPauseBtn.textContent = 'Play';
  } else {
    timer = setInterval(nextImage, 3000);
    playPauseBtn.textContent = 'Pause';
  }
  playing = !playing;
}

// Event listeners
breedSelect.addEventListener('change', e => {
  fetchImagesForBreed(e.target.value);
});
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
playPauseBtn.addEventListener('click', togglePlay);

// Init
fetchBreeds();
