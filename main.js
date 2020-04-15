const prReviewTools = document.querySelector('.pr-review-tools');

const label = document.createElement('label');
const checkbox = document.createElement('input');
const text = document.createTextNode("Toggle All");

checkbox.setAttribute('type', 'checkbox');
checkbox.classList.add('gh-checker-input');

label.classList.add('btn', 'btn-sm', 'gh-checker-btn');
label.appendChild(checkbox);
label.appendChild(text);

prReviewTools.appendChild(label);

function triggerLabelsClick(labels) {
  for (const label of labels) {
    label.click();
  }
}

checkbox.addEventListener('change', function(event) {
  event.preventDefault();

  const filesClass = !this.checked ?
    'label.js-reviewed-toggle.js-reviewed-file' :
    'label.js-reviewed-toggle:not(.js-reviewed-file)';

  const filesLabels = document.querySelectorAll(filesClass);

  triggerLabelsClick(filesLabels);
});
