const events = [
  {
    "id": "01",
    "name": "Rave Autumn",
    "date": "14.09.2019",
    "city": "Amsterdam",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
  },
  {
    "id": "02",
    "name": "Best of 2019",
    "date": "20.09.2019",
    "city": "Berlin",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/ec3917285ef4db8532c8a9cd9a2112ce.png"
  },
  {
    "id": "03",
    "name": "Faderhead",
    "date": "10.11.2019",
    "city": "Rim",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/53486baba5ec9d256ce20816a3e54e51.png"
  },
  {
    "id": "04",
    "name": "Purple Fog Side",
    "date": "05.06.2019",
    "city": "Berlin",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/e1baa378009391210cc0e64f65c7784e.png"
  },
  {
    "id": "05",
    "name": "Carbon based Liveform",
    "date": "14.02.2019",
    "city": "Sr.Petersburg",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/b1f06edaf618c3e3ad19c159eb5aa036.jpeg"
  },
  {
    "id": "06",
    "name": "Neuroticfish",
    "date": "25.05.2019",
    "city": "Sr.Petersburg",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/49705480ff397085ad34685c4181c1ab.jpeg"
  },
  {
    "id": "07",
    "name": "Faderhead",
    "date": "20.11.2019",
    "city": "Rim",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/de9f4b49cc5ba737911b0db30f082fff.jpeg"
  },
  {
    "id": "08",
    "name": "Rave Winter",
    "date": "15.02.2019",
    "city": "Berlin",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
  },
  {
    "id": "09",
    "name": "Not a Robot",
    "date": "22.06.2019",
    "city": "Rim",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/14bce6211e055410a043e02a22cec69b.jpeg"
  },
  {
    "id": "10",
    "name": "Carbon Based lifeforms",
    "date": "22.09.2019",
    "city": "Berlin",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/7d655ea8b13f5fdda4469fb0035bd7a3.jpeg"
  },
  {
    "id": "11",
    "name": "Icon of Coil",
    "date": "19.05.2019",
    "city": "Rim",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/8c76c770ded42cea343dbf2d8523791e.jpeg"
  },
  {
    "id": "12",
    "name": "Solar Fields",
    "date": "20.06.2019",
    "city": "Sr.Petersburg",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/9ddae28837d2e4217e5c2e99bbd6f3a0.jpeg"
  },
  {
    "id": "13",
    "name": "Apoptygma Berzerk",
    "date": "14.11.2019",
    "city": "Amsterdam",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/720e3b29bf238cd40785ffe157b1151a.jpeg"
  },
  {
    "id": "14",
    "name": "Mental Discipline",
    "date": "16.11.2019",
    "city": "Rim",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/76372b51ab7408e826a191577abcd79d.jpeg"
  },
  {
    "id": "15",
    "name": "Apoptygma Berzerk",
    "date": "25.02.2019",
    "city": "Berlin",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/aec8583caa5bbe34b2c5695e2546ea3b.jpeg"
  },
  {
    "id": "16",
    "name": "Solar Fields",
    "date": "14.02.2019",
    "city": "Amsterdam",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/0662c0df7663f71831e83be091228413.jpeg"
  }
];

const state = {
  filters: {
    city: 'all',
    date: 'all',
  },
  bookmarks: [],
  events: [],
};

const dates = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};

const filterEvents = (eventsColl, options) => {
  const filteredEvents = Object.entries(options).reduce((acc, [filterType, value]) => {
    if (!value || value === 'all') {
      return acc;
    }

    if (filterType === 'date') {
      const soughtNumberOfMonth = dates[value];
      return acc.filter((event) => {
        const currentEventMonth = event[filterType].split('.')[1];

        return currentEventMonth === soughtNumberOfMonth;
      });
    }

    return acc.filter((event) => event[filterType] === value);
  }, eventsColl);

  state.events = filteredEvents;
};

const renderCards = (data) => {
  const eventsList = document.querySelector('.events-list');
  eventsList.innerHTML = '';
  let count = 0;
  if (data.length === 0) {
    const emptyListTitle = document.createElement('h2');
    emptyListTitle.classList.add('empty');
    emptyListTitle.textContent = 'No events available :('

    eventsList.append(emptyListTitle);
    return;
  }
  data.forEach((event) => {
    const cardBlock = document.createElement('div');
    cardBlock.classList.add('card', 'card-hidden');

    const cardIdBlock = document.createElement('div');
    cardIdBlock.classList.add('card__id');

    const cardIdTextBlock = document.createElement('p');
    cardIdTextBlock.classList.add('card__id-text');
    cardIdTextBlock.textContent = event.id;
    cardIdBlock.append(cardIdTextBlock);

    const bookmarkBlock = document.createElement('div');
    bookmarkBlock.classList.add('card__bookmark');
    if (state.bookmarks.includes(event.id)) {
      const bookmarkFlag = document.createElement('img');
      bookmarkFlag.setAttribute('src', '/docs/img/flag.png');
      bookmarkFlag.setAttribute('alt', 'boookmark-img');
      bookmarkBlock.append(bookmarkFlag);
    }
    cardBlock.append(bookmarkBlock);

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card__title');
    cardTitle.textContent = event.name;

    const cardBackground = document.createElement('img');
    cardBackground.classList.add('card__img');
    cardBackground.setAttribute('src', event.image);
    cardBackground.setAttribute('alt', 'card-image');

    cardBlock.append(cardIdBlock);
    cardBlock.append(cardTitle);
    cardBlock.append(cardBackground);

    // красивое появление карточек
    count += 1;
    setTimeout(() => {
      cardBlock.classList.remove('card-hidden');
      cardBlock.classList.add('card-visible');
    }, 50 * count);

    cardBlock.addEventListener('click', () => {
      const bookmark = cardBlock.querySelector('.card__bookmark');

      if (state.bookmarks.includes(event.id)) {
        bookmark.innerHTML = '';
        const index = state.bookmarks.findIndex(({ id }) => id === event.id);
        state.bookmarks.splice(index, 1);
      } else {
        const bookmarkFlag = document.createElement('img');
        bookmarkFlag.setAttribute('src', '/src/img/flag.png');
        bookmarkFlag.setAttribute('alt', 'boookmark-img');
        bookmark.append(bookmarkFlag);
  
        state.bookmarks.push(event.id);
        
        // фильтрация карточек, которые в закладках
        const bookmarkedEvents = [];
        const restEvents = [];

        for (const event of state.events) {
          if (state.bookmarks.includes(event.id)) {
            bookmarkedEvents.push(event);
          } else {
            restEvents.push(event);
          }
        }

        const sortedEvents = [...bookmarkedEvents, ...restEvents];

        renderCards(sortedEvents);
      }
    });

    eventsList.append(cardBlock);
  });
};

const citySelector = document.querySelector('#city');
const monthSelector = document.querySelector('#month');

citySelector.addEventListener('change', (e) => {
  state.filters.city = e.target.value;
  filterEvents(events, state.filters);
  renderCards(state.events); 
});

monthSelector.addEventListener('change', (e) => {
  state.filters.date = e.target.value;
  filterEvents(events, state.filters);
  renderCards(state.events); 
});

state.events = events;
renderCards(state.events);