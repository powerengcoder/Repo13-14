var modal = document.getElementById("myModal");
var images = document.getElementsByClassName("image");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");

// Go through all of the images
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image
  img.onclick = function (evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
