const prReviewTools = document.querySelector('.pr-review-tools');

const btn = document.createElement('button');
btn.innerHTML = '✔️ Check All';
btn.classList.add('btn', 'btn-sm');

prReviewTools.appendChild(btn);

btn.addEventListener('click', function(event) {
  event.preventDefault();

  const labelsToggle = document.querySelectorAll('label.js-reviewed-toggle:not(.js-reviewed-file)');

  for (const label of labelsToggle) {
    label.click();
  }
});
