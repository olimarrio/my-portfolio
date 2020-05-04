import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#typed', {
    strings: ["Web Developer", "Organisational Psychologist", "Occasional Farmer"],
    typeSpeed: 100,
    loop: true
  });
};

export { loadDynamicBannerText };
