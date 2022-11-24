const featured = document.querySelector('.featured');

const features = [
    {
        image: 'https://s32508.pcdn.co/wp-content/uploads/2019/06/hits-2022-model-1024x683.jpg',
        title: 'Hogwarts in the Snow',
        subtitle: '12th November 2022 - 15th January 2023',
        details: "You are invited to experience a very ‘Harry Christmas’ at the Studio Tour during Hogwarts in the Snow,",
    },
    {
        image: 'https://s32508.pcdn.co/wp-content/uploads/2019/10/Dinner-Great-Hall-Menu.jpg',
        title: 'Dinner in the Great Hall',
        subtitle: '13th, 14th, 15th December 2022',
        details: 'Dine as the students of Hogwarts did, as our popular <strong>Dinner in the Great Hall</strong>  events return for another magical year.',
    },
    {
        image: 'https://s32508.pcdn.co/wp-content/uploads/2022/06/wbstl-greenhouse-scaled-1024x683.jpg',
        title: 'Professor Sprout’s Greenhouse',
        subtitle: 'Step into the greenhouse set',
        details: 'Built by the original Harry Potter filmmakers, the greenhouse is home to many exotic and magical plants.',
    },
    {
        image: 'https://s32508.pcdn.co/wp-content/uploads/2019/06/Hogwarts-Express-2.jpg',
        title: 'Hogwarts Express',
        subtitle: 'Step Onto Platform 9 ¾',
        details: 'We unveiled a 20,000ft² expansion, including the original Hogwarts Express steam engine and a recreation of Platform 9¾.',
    },
    {
        image: 'https://s32508.pcdn.co/wp-content/uploads/2019/06/Gringotts-Thumbnail-1.jpg',
        title: 'Gringotts Wizarding Bank',
        subtitle: 'Withdraw some Galleons from Gringotts',
        details: 'From Harry Potter first discovering Diagon Alley to the famous trio escaping on a Ukrainian Ironbelly dragon in their quest for a Horcrux.',
    },
    {
        image: 'https://s32508.pcdn.co/wp-content/uploads/2019/09/Diagon-Alley-1024x483.jpg',
        title: 'Diagon Alley',
        subtitle: 'BROWSE THE WIZARDING SHOPPING STREET',
        details: 'The iconic Diagon Alley set constantly changed throughout the film series. Since its construction, walls have shifted and shop fronts have moved.',
    }
]

features.forEach((feature) => {
    featured.innerHTML += `
      <li class="feature">
        <div class="featured-image" style="background-image: url(${feature.image})">
        </div>
        <div class="featured-more">
          <h4 class="featured-title">${feature.title}</h4>
          <h6 class="featured-subtitle">${feature.subtitle}</h6>
          <div class="featured-under"></div>
          <p class="featured-details">${feature.details}</p>
        </div>
      </li>
    `
})