'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList does not exist');
$taskList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log('eventTarget: ', eventTarget);
  console.log('tagName of eventTarget: ', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const $taskListItem = eventTarget.closest('.task-list-item');
    console.log('taskListItem: ', $taskListItem);
    $taskListItem.remove();
  }
});
