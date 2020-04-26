import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    title: 'CDC',
    description:
      'The CDC has important information about the COVID-19 virus.',
    resourceUrl: 'https://www.cdc.gov/coronavirus/2019-nCoV/index.html',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/US_CDC_logo.svg/1200px-US_CDC_logo.svg.png',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'World Health Organization',
    description:
      'The Who has important information about the COVID-19 virus.',
    resourceUrl: 'https://www.who.int/',
    imageUrl: 'https://img.etimg.com/thumb/msid-75265195,width-300,imgsize-134545,resizemode-4/who-agencies.jpg',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Red Cross',
    description:
      'Red Cross is a crucial resource for this pandemic',
    resourceUrl: 'https://www.redcross.org/',
    imageUrl: 'data:image/png;base64,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',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Corona Tips',
    description:
      'Backed by google, You can be guranteed the latest update and tips',
    resourceUrl: 'https://www.google.com/search?hl=en&source=hp&ei=lsClXrWxAuKIggfMmqWYBQ&q=coronavirus+tips&oq=&gs_lcp=CgZwc3ktYWIQARgAMg4IABDqAhC0AhDpAhDlAjIOCAAQ6gIQtAIQ6QIQ5QJQAFgAYLcSaAJwAHgAgAEAiAEAkgEAmAEAqgEHZ3dzLXdperABAg&sclient=psy-ab',
    imageUrl: 'https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/5-tips-for-managing-ppc-during-the-coronavirus-outbreak-5e82614faa023.png',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Corona Stats',
    description:
      'Update on the latest corona numbers',
    resourceUrl: 'https://coronavirus.jhu.edu/',
    imageUrl: 'https://coronavirus.jhu.edu/images/jhu_covid_19_generic.png',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Latest News',
    description:
      'Stay upto date with the latest news ',
    resourceUrl: 'https://www.google.com/search?bih=821&biw=1600&rlz=1C5CHFA_enUS892US892&hl=en&source=hp&ei=UcGlXsCWGOWIytMPivGqwAU&q=coronavirus+info+&oq=coronavirus+info+&gs_lcp=CgZwc3ktYWIQAzICCAA6DggAEOoCELQCEOkCEOUCOgUIABCDAToECAAQClC3D1j7VGDKXWgKcAB4AIABSYgB_wmSAQIyMZgBAKABAaoBB2d3cy13aXqwAQI&sclient=psy-ab&ved=0ahUKEwiAg7HIy4bpAhVlhHIEHYq4ClgQ4dUDCAk&uact=5',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_News_icon.svg/1200px-Google_News_icon.svg.png',
    updatedAt: '27/03/2019'
  }
];
