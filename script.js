import goods from './goods.js';

// Date //
const getDayInfo = (dateToFormat) => {
  const [month, day, year] = dateToFormat.split('.').map(i => parseInt(i));
  const date = new Date(year, month - 1, day);

  const newWeek = Math.ceil((day + date.getDay()) / 7);

  const [newDay, , newMonth, newYear] = date.toLocaleDateString('ru-RU', {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  }).split(' ');

  return `${newDay[0].toUpperCase() + newDay.slice(1)} ${newWeek} неделя ${newMonth[0].toUpperCase() + newMonth.slice(1)} ${newYear} года`;
}

// Cards //
const showCards = (filter) => {

  const filterCards = (goods, filter) => {
    switch (filter) {
      case 'marvel':
        return goods.filter(item => item.universe === 'marvel');
      case 'dc':
        return goods.filter(item => item.universe === 'dc');
      case 'starwars':
        return goods.filter(item => item.universe === 'starwars');
      default:
        return goods;
    };
  };

  filterCards(goods, filter).map(item => {
    const marvelCards = document.querySelector('#marvel');
    const dcCards = document.querySelector('#dc');
    const starwarsCards = document.querySelector('#starwars');
    
    const {
      name,
      photo,
      description,
      date,
    } = item;

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
              <h2 class="card-name">${name}</h2>
              <img class="card-photo" src="${photo}">
              <p class="card-description">${description}</p>
              <div class="card-date">${getDayInfo(date)}</div>
              <button class="card-buy btn">Купить</button>
              `;

    filter === 'marvel' ? marvelCards.append(card) :
      filter === 'dc' ? dcCards.append(card) :
      starwarsCards.append(card);
  });
};

showCards('marvel');
showCards('dc');
showCards('starwars');

// Modal //
const cardBuy = document.querySelectorAll('.card-buy');
const modalBuy = document.querySelector('.modal-buy');
const modalCancel = document.querySelector('.modal-cancel');
const modal = document.querySelector('.modal');
const order = document.querySelector('.order');
const orderBack = document.querySelector('.order-btn');

cardBuy.forEach(item => item.onclick = () => {
  modal.classList.add('active');
});

modalBuy.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('active');

  setTimeout(() => {
    order.classList.add('active');
  }, 100);
});

modalCancel.addEventListener('click', () => modal.classList.remove('active'));
orderBack.addEventListener('click', () => order.classList.remove('active'));

// Mode dark/light //
const mode = document.querySelector('.mode');
const body = document.querySelector('body');

mode.addEventListener('click', () => {
  body.classList.toggle('dark');
});

// Up //
const up = document.querySelector('.up');

up.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('scroll', () => {
  scrollY < 100 ? up.hidden = true : up.hidden = false;
})

// Scroll //
const scrollToElement = () => {
  const scrollTo = document.querySelectorAll('a[href^="#"');

  scrollTo.forEach(i => {
    i.addEventListener('click', (e) => {
      e.preventDefault();
      const id = i.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      nav.classList.remove('show');
      menu.classList.remove('active');
    });
  })
};

scrollToElement();

// Menu @media//
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav-links');

menu.addEventListener('click', () => {
  nav.classList.toggle('show');
  menu.classList.toggle('active');
});