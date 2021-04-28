const aElements = document.querySelectorAll('a');
const nytArticleUrl =
  'https://www.nytimes.com/2014/03/18/science/space/detection-of-waves-in-space-buttresses-landmark-theory-of-big-bang.html?_r=0';

aElements.forEach((element) => {
  element.href = nytArticleUrl;
  element.target = '_blank';
});
