const names = [];

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex > 0) {
    const indexToSwap = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[indexToSwap]] = [
      array[indexToSwap],
      array[currentIndex],
    ];
  }

  return array;
}

function display(list) {
  const listEl = document.getElementById('persons-list');
  const fragment = document.createDocumentFragment();

  list.forEach((el) => {
    const li = document.createElement('li');

    li.innerHTML = el;
    fragment.appendChild(li);
  });

  console.log(fragment);
  listEl.innerHTML = '';
  listEl.appendChild(fragment);
}

function addPerson() {
  const nameInput = document.getElementById('name');
  const name = nameInput.value;

  if (!name) {
    return;
  }

  names.push(name);
  display(names);
  nameInput.value = '';
}

function shuffleNames() {
  const result = shuffle(names).map((name, index) => {
    const recipientIndex = (index + 1) % names.length;
    const giftRecipient = names[recipientIndex];

    return `<b>${name}</b> makes a gift for <b>${giftRecipient}</b>`;
  });

  display(result);
}

// shuffle(names).forEach((name, index) => {
//   const recipientIndex = (index + 1) % names.length;
//   const giftRecipient = names[recipientIndex];
//   console.log(`${name} makes a gift for ${giftRecipient}`);
// });
// console.log(shuffle(names));
