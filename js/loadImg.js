const imgDiv = document.querySelector('.imgDiv');
createImg('https://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg');


function createImg(url) {
  const img = document.createElement('img');
  img.src = url;
  img.addEventListener('load', loadImg(img));
};

function loadImg(img) {
  setTimeout(() => {
    showImg(img);
  }, 2000);
}

function showImg(img) {
  imgDiv.innerHTML = '';
	imgDiv.append(img);
};

