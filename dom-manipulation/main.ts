let hotButtonClickCount = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
// if (!$hotButton) throw new Error('The $hotButton query failed');
if (!$hotButton || !$clickCount) {
  throw new Error('The $hotButton or $clickCount query failed');
}

function buttonClicked(event: Event): void {
  hotButtonClickCount++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  $clickCount.textContent = `Clicks: ${hotButtonClickCount}`;
  // console.log('number of clicks', count);

  if (hotButtonClickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (hotButtonClickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (hotButtonClickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (hotButtonClickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (hotButtonClickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', buttonClicked);
