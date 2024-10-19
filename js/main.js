import { data } from '../js/data.js';

// Option 1 using <template> and cloneNode
function generateTemplateContent() {
  const main = document.querySelector('main');
  const template = document.querySelector('#character-template');
  const fragment = document.createDocumentFragment();

  data.forEach(character => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.name').textContent = character.name;
    clone.querySelector('.role').textContent = `Role: ${character.role}`;
    clone.querySelector('.weapon').textContent = `Weapon: ${character.weapon}`;
    clone.querySelector('.car').textContent = `Car: ${character.car}`;
    fragment.appendChild(clone);
  });

  main.appendChild(fragment);
}

// Optionn 2 Using createElement()
function generateCreateElementContent() {
  const main = document.querySelector('main');
  const fragment = document.createDocumentFragment();

  data.forEach(character => {
    const section = document.createElement('section');
    section.classList.add('character-container');

    const details = document.createElement('details');

    const summary = document.createElement('summary');
    summary.textContent = character.name;

    const role = document.createElement('p');
    role.textContent = `Role: ${character.role}`;

    const weapon = document.createElement('p');
    weapon.textContent = `Weapon: ${character.weapon}`;

    const car = document.createElement('p');
    car.textContent = `Car: ${character.car}`;

    details.appendChild(summary);
    details.appendChild(role);
    details.appendChild(weapon);
    details.appendChild(car);
    section.appendChild(details);
    fragment.appendChild(section);
  });

  main.appendChild(fragment);
}

// Option 3 using map() and innerHTML
function generateInnerHTMLContent() {
  const main = document.querySelector('main');
  const content = data.map(character => `
    <section class="character-container">
      <details>
        <summary>${character.name}</summary>
        <p>Role: ${character.role}</p>
        <p>Weapon: ${character.weapon}</p>
        <p>Car: ${character.car}</p>
      </details>
    </section>
  `).join('');

  main.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
  generateTemplateContent();
  generateCreateElementContent();
  generateInnerHTMLContent();
});