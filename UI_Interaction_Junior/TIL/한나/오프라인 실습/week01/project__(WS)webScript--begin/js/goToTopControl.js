var goToTopButton = document.querySelector('.button-goToTop');

console.log(goToTopButton);

/* 내가 생각한 답 */
// function delayedAlert() {
//   window.setTimeout(slowAlert, 3000);
//   goToTopButton.classList.add('is--active');
// }

// delayedAlert();

/* 수업에서 나온 답 */

function showGoToTopButton() {
  goToTopButton.classList.add('is--active');
}

window.setTimeout(showGoToTopButton, 3000);
