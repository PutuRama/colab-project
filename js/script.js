




//var efek ngetik
const tagline = ['Educate' + " Children" + ' Making' + ' Useful' + ' for' + ' State', ''];
let gone = 0;
let numbering = 0;
let CurrentItem = '';
let tag = '';



//efek ngetik
pop();
function pop() {
  if (gone == tagline.length) {
  gone = 0;
}

  CurrentItem = tagline[gone];
  tag = CurrentItem.slice(0, ++numbering);

  console.log(tag);
  document.querySelector('.typing-effect').textContent = tag;

  if (tag.length == CurrentItem.length) {
    gone++;
    numbering = 0;
  }

  setTimeout(pop, 400);
};

