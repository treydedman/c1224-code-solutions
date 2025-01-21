const $h1 = document.querySelector('.countdown-display');

let count = 4;
const intervalId = setInterval(() => {
  if (count > 0) {
    $h1!.textContent = count.toString();
    count--;
  } else {
    $h1!.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
