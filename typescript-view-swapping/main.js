'use strict';
// query for .tab-container and node list of all .tab and .view elements
const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');
// check for failed query
if (!$tabContainer) throw new Error('$tabContainer query failed');
if (!$tabs) throw new Error('$tab query failed');
if (!$views) throw new Error('$view query failed');
// add a click event listener to .tab-container
$tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  // console.log('$eventTarget: ', $eventTarget);
  // check to ensure $eventTarget matches .tab
  if ($eventTarget.matches('.tab')) {
    // loop thru the node list of .tab
    for (let i = 0; i < $tabs.length; i++) {
      const $tab = $tabs[i];
      // add and remove .active
      if ($tab === $eventTarget) {
        $tab.className = 'tab active';
      } else {
        $tab.className = 'tab';
      }
    }
    // assign new variable to get the value of data-view
    const eventTargetView = $eventTarget.dataset.view;
    // loop thru the node list of .view using getAttribute method
    for (let i = 0; i < $views.length; i++) {
      const $view = $views[i];
      // view or view-hidden
      if ($view.getAttribute('data-view') === eventTargetView) {
        $view.className = 'view';
      } else {
        $view.className = 'view hidden';
      }
    }
  }
});
