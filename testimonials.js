const testimonials = [
    {
        image: "image/johnwick.webp",
        fullName: "John Wick",
        testimonial: `"កាហ្វេប្រូឆ្ងាញ់ម៉េស? ញ៉ុមផឹកម្តងហើយឆ្អែតម៉ាជីវិតម៉ង ឆ្ងាញ់ពេក!"`
    },
    {
        image: "image/johndoe.webp",
        fullName: "Jonh Doe",
        testimonial: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`
    },
    {
        image: "image/tomholand.webp",
        fullName: "Tom Holand",
        testimonial: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`
    },
        {
        image: "image/johnwick.webp",
        fullName: "John Wick",
        testimonial: `"កាហ្វេប្រូឆ្ងាញ់ម៉េស? ញ៉ុមផឹកម្តងហើយឆ្អែតម៉ាជីវិតម៉ង ឆ្ងាញ់ពេក!"`
    },
    {
        image: "image/johndoe.webp",
        fullName: "Jonh Doe",
        testimonial: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`
    },
    {
        image: "image/tomholand.webp",
        fullName: "Tom Holand",
        testimonial: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`
    }
];

const splideList = document.getElementById("splide-list");

let splideItems = "";

for (let i = 0; i < testimonials.length; i++) {
    splideItems += 
    `<li class="splide__slide splide-slide-${i}">
        <img class="splide-img" src="${testimonials[i].image}" alt="${testimonials[i].fullName}">
        <h3 class="splide-full-name">${testimonials[i].fullName}</h3>
        <div class="p-area">
            <p class="splide-testimonial">${testimonials[i].testimonial}</p>
        </div>
    </li>`;
}

splideList.innerHTML = splideItems;

var splide = new Splide( '.splide', {
  type   : 'loop',
  padding: '5rem',
} );

splide.mount();

