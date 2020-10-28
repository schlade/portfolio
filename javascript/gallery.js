/*
 * GALLERY SCRIPT
 *
 * Made for Joonas Gaerlan
 *
 * By Mads Ahlquist Jensen
 */
var x = document.getElementsByClassName("gallery");

function setup(){
  for (var id = 0; id < x.length; id++) {
    move(0, id);
  }
};

function move(n, id) {
  var content = x[id].children.content;
  var length = content.childElementCount;

  for (var i = 0; i < length; i++) {
    if (content.children[i].style.display === "block") {
      n += i;
    }
  }

  for (var i = 0; i < length; i++) {
    content.children[i].style.display = "none";
  }

  if (n > length-1) {
    n = 0;
  }

  if (n < 0) {
    n = length-1;
  }

  content.children[n].style.display = "block";

}
