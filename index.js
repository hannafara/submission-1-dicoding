export default function hideProfile() {
  let width = screen.width;
  let pictureElement = document.getElementById('profile');
  if (pictureElement.style.display === 'block' && width <= 480) {
    pictureElement.style.display = 'none';
  }
  if (pictureElement.style.display === 'none' && width <= 480) {
    pictureElement.style.display = 'block';
  }
}
