const $heading = document.querySelector('.message');

function helloThere(): void {
  $heading!.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);
