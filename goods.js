let count = 0;
const goods = [
  {
    id: ++count,
    name: 'Ironman',
    photo: 'https://wallpapersmug.com/download/1024x768/ad84c3/iron-man-comicart-4k.jpg',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt pariatur dolorem. Consequuntur nesciunt beatae possimus! Incidunt sit reiciendis ipsam facilis magni quasi ullam error, perspiciatis officiis fugit! Dolor, voluptas?',
    date: '01.31.2023',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Boba Fett',
    photo: 'https://mobimg.b-cdn.net/v3/fetch/6e/6e4ff6c7d9985af0117caa9fc1790159.jpeg',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt pariatur dolorem. Consequuntur nesciunt beatae possimus! Incidunt sit reiciendis ipsam facilis magni quasi ullam error, perspiciatis officiis fugit! Dolor, voluptas?',
    date: '01.01.2023',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Batman',
    photo: 'https://i.pinimg.com/originals/39/b1/82/39b1820d05781c0f8cb110a2d47017f7.jpg',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt pariatur dolorem. Consequuntur nesciunt beatae possimus! Incidunt sit reiciendis ipsam facilis magni quasi ullam error, perspiciatis officiis fugit! Dolor, voluptas?',
    date: '02.28.2023',
    universe: 'dc',
  },
  {
    id: ++count,
    name: 'Thor',
    photo: 'https://comicvine.gamespot.com/a/uploads/original/11122/111220544/4469327-thor-680208-1280x879.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '01.01.2023',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Luke Skywalker',
    photo: 'https://sm.ign.com/t/ign_nordic/news/l/luke-skywa/luke-skywalkers-yellow-bladed-lightsaber-revealed-in-new-sta_damz.1200.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '05.01.2019',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Flash',
    photo: 'https://i.pinimg.com/originals/19/1d/cd/191dcd43811589ede5567bd22e5f1713.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '07.22.2018',
    universe: 'dc',
  },
  {
    id: ++count,
    name: 'Superman',
    photo: 'https://mobimg.b-cdn.net/v3/fetch/7b/7b6a9ed45f3a372dedd5e41e75595d0e.jpeg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '09.13.2017',
    universe: 'dc',
  },
  {
    id: ++count,
    name: 'Joker',
    photo: 'https://jokerfull.net/wp-content/uploads/2021/08/image2.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '10.30.2016',
    universe: 'dc',
  },
  {
    id: ++count,
    name: 'Aquaman',
    photo: 'https://i.pinimg.com/736x/d4/24/47/d42447b9a3028c3f2f581c293c17d614--aquaman-posts.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '11.21.2015',
    universe: 'dc',
  },
  {
    id: ++count,
    name: 'Bane',
    photo: 'https://wegotthiscovered.com/wp-content/uploads/2023/01/Bane-art.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '12.31.2014',
    universe: 'dc',
  },
  {
    id: ++count,
    name: 'Green Lantern',
    photo: 'https://mobimg.b-cdn.net/v3/fetch/35/3534cf4a3a67a4ee0b6e15cc91331a89.jpeg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '01.31.2013',
    universe: 'dc',
  },
  {
    id: ++count,
    name: 'Doomsday',
    photo: 'https://i.pinimg.com/736x/1f/97/35/1f9735e61ac0dd0d35a8ce7ab5826a29--image-search-google-search.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '02.28.2012',
    universe: 'dc',
  },
  {
    id: ++count,
    name: 'Darkside',
    photo: 'https://u.livelib.ru/character/1000005460/o/8g6zmfif/o-o.jpeg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '04.25.2011',
    universe: 'dc',
  },
  {
    id: ++count,
    name: 'Black Adam',
    photo: 'https://i.pinimg.com/originals/9d/dc/d7/9ddcd75f9bea3c49619ad7f15f322161.png',
    description: 'Lorem ipsum dolor sit amet.',
    date: '06.28.2010',
    universe: 'dc',
  },
  {
    id: ++count,
    name: 'Spiderman',
    photo: 'https://mobimg.b-cdn.net/v3/fetch/ae/ae5201aa2cf241d1888fd19db409ab97.jpeg',
    description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    date: '08.13.2009',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Venom',
    photo: 'https://i.pinimg.com/originals/ca/1b/9b/ca1b9b4347987af289bf08e33ca66f6f.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '10.19.2008',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Thanos',
    photo: 'https://i.pinimg.com/736x/f9/2c/47/f92c47764b60412bc65bcb0f050b6ca6.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '11.30.2007',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Captain America',
    photo: 'https://9to5toys.com/wp-content/uploads/sites/5/2020/04/Captain-America-Vol.-1-Winter-In-America.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '12.31.2006',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Antman',
    photo: 'https://mobimg.b-cdn.net/v3/fetch/6c/6c59986c4dc4e2d5e2994cbabe9e623a.jpeg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '11.19.2005',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Nova',
    photo: 'https://i.pinimg.com/originals/a5/c3/73/a5c373468ca0cbdefa99c1bbe18b2dc8.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '10.16.2004',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Loki',
    photo: 'https://i.pinimg.com/originals/5e/8d/c6/5e8dc63bd6f52198754b3ff0c732aaa6.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '09.30.2003',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Ultron ',
    photo: 'https://terrigen-cdn-dev.marvel.com/content/prod/2x/Ultron.png',
    description: 'Lorem ipsum dolor sit amet.',
    date: '08.28.2002',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Deadpool ',
    photo: 'https://mobimg.b-cdn.net/v3/fetch/45/453f1636ff04721887da67f6ab3575ea.jpeg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '07.01.2001',
    universe: 'marvel',
  },
  {
    id: ++count,
    name: 'Darth Vader',
    photo: 'https://phonoteka.org/uploads/posts/2021-05/1621956674_58-phonoteka_org-p-dart-veider-art-krasivo-58.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '06.11.2000',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Jabba the Hutt',
    photo: 'https://i.pinimg.com/736x/ca/6f/b0/ca6fb0528aa475ed65212a4458d4df24.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '05.23.2023',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Master Yoda',
    photo: 'https://kartinkin.net/uploads/posts/2022-12/1670028911_2-kartinkin-net-p-master-yoda-art-vkontakte-3.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '06.21.2022',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Dart Maul',
    photo: 'https://avatars.dzeninfra.ru/get-zen_doc/29030/pub_5a651c5557906a808a224da4_5a651d53799d9d6663036a66/scale_1200',
    description: 'Lorem ipsum dolor sit amet.',
    date: '05.11.2021',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Han Solo',
    photo: 'https://i.ytimg.com/vi/_EQdxfVAH7g/maxresdefault.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '04.10.2020',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Chewbacca',
    photo: 'https://mobimg.b-cdn.net/v3/fetch/bf/bf6344d056e7cd95762e2b4f770df7b6.jpeg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '03.25.2019',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Imperial Stormtroopers',
    photo: 'https://i.pinimg.com/originals/cb/89/c8/cb89c87420fd7f5aa21df6d6ee788965.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '02.28.2020',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Dart Revan',
    photo: 'https://avatars.dzeninfra.ru/get-zen_doc/5286518/pub_62fa7fff73293e63d1a0b8a1_6307b993975ea333eb22e5cf/scale_2400',
    description: 'Lorem ipsum dolor sit amet.',
    date: '02.01.2021',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Obi-Wan Kenobi',
    photo: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/04/Obi-Wan-Kenobi-in-the-Age-of-Republic-comic.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '01.31.2023',
    universe: 'starwars',
  },
  {
    id: ++count,
    name: 'Grievous',
    photo: 'https://phonoteka.org/uploads/posts/2022-09/1663453827_19-phonoteka-org-p-general-grivus-art-oboi-23.jpg',
    description: 'Lorem ipsum dolor sit amet.',
    date: '01.01.2023',
    universe: 'starwars',
  },
  
];

export default goods;
