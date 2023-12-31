import {GiPineTree} from 'react-icons/gi'
import { SiOpenaigym } from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Safaris",
        path: '/safaris'
    },
    {
        name: "Guides",
        path: '/guides'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const safaris = [
    {
        id: 1,
        icon: <GiPineTree/>,
        title: "Adventure Safaris",
        info: "The caribbean seas, an abundance of wildlife and breathtaking views. ",
        path: "/safaris/111"
    },
    {
        id: 2,
        icon: <GiPineTree/>,
        title: "Winter Safaris",
        info: "Being out in the elements, feeling the power of mother nature you will be sure to experience over the winter. It truly makes you feel alive!",
        path: "/safaris/222"
    },
    {
        id: 3,
        icon: <GiPineTree/>,
        title: "Wildlife Safaris",
        info: "Experince places very few have been to before, and even better, with no one else around you!",
        path: "/safaris/333"
    },
    {
        id: 4,
        icon: <GiPineTree/>,
        title: "Bespoke Safaris",
        info: "Dive deeper into what Scotland has to offer. We can dynamically draw up a bespoke package tailored to your preferences!",
        path: "/safaris/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        avatar: require("./images/Avatars/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Egineer",
        avatar: require("./images/Avatars/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: require("./images/Avatars/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        avatar: require("./images/Avatars/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",
        avatar: require("./images/Avatars/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Adventure Package',
        desc: 'This package is perfect for those who want to experience the extreme outdoors Scotland has to offer',
        price: " POA",
        features: [
            {feature: 'Fishing', available: true},
            {feature: 'Cycling / Mountain Biking', available: true},
            {feature: 'Kayaking', available: true},
            {feature: 'Canoeing', available: true},
            {feature: 'Climbing', available: true},
            {feature: 'Paddle Boarding', available: true},
            {feature: 'Horse Trekking', available: true},
            {feature: 'Falconry', available: true},
            {feature: 'Photography', available: true},
            {feature: 'Wildlife Watching', available: true},
            {feature: 'Skiing', available: true}
        ]
    },
    {
        id: 2,
        name: 'Winter Package',
        desc: 'This is the perfect package for those who want to experience the harsh elements that will make you feel alive!',
        price: " POA",
        features: [
            {feature: 'Skiing and Snowboarding', available: true},
            {feature: 'Ice Climbing', available: true},
            {feature: 'Husky Ride', available: true},
            {feature: 'Northern Lights', available: true},
            {feature: 'Walking', available: true},
            {feature: 'Cycling / Mountain Biking', available: true},
            {feature: 'Photography', available: true},
            {feature: 'Wildlife Watching', available: true},
            {feature: 'Kayaking', available: false},
            {feature: 'Canoeing', available: false},
            {feature: 'Climbing', available: false},
        ]
    },
    {
        id: 3,
        name: 'Wildlife Package',
        desc: 'This package is perfect for those who want to see the beautiful wildlife Scotland has to offer',
        price: " POA",
        features: [
            {feature: 'Nature Walks', available: true},
            {feature: 'Ocean Tours', available: true},
            {feature: 'BirdWatching', available: true},
            {feature: 'Wilfdlife Photography', available: true},
            {feature: 'Horse Riding', available: true},
            {feature: 'Sea Kayaking', available: true},
            {feature: 'Walking', available: true},
            {feature: 'Northern Lights', available: false},
            {feature: 'Skiing', available: false},
            {feature: 'Climbing', available: false},
            {feature: 'Cycling', available: false},
        ]
    }
]









const Guide1 = require('./images/Guide1.png')
// const Guide2 = require('./images/Guide2.jpg')
// const Guide3 = require('./images/Guide3.jpg')
// const Guide4 = require('./images/Guide4.jpg')
// const Guide5 = require('./images/Guide5.jpg')
// const Guide6 = require('./images/Guide6.jpg')


export const guides = [
    {
        id: 1,
        image: Guide1,
        name: 'Orlando Hill',
        job: 'Adventure Guide',
        socials: ['https://www.instagram.com/_orlando_hill/', 'https://twitter.com/', 'https://www.facebook.com/orlando.hill.18', 'https://www.linkedin.com/in/orlando-hill-5290431b3/']
    },
    // {
    //     id: 2,
    //     image: Guide2,
    //     name: 'Daniel vinyo',
    //     job: 'Speed Guide',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // },
    // {
    //     id: 3,
    //     image: Guide3,
    //     name: 'Edem Quist',
    //     job: 'Flexibility Guide',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // },
    // {
    //     id: 4,
    //     image: Guide4,
    //     name: 'Shatta Wale',
    //     job: 'Body Composition Guide',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // },
    // {
    //     id: 5,
    //     image: Guide5,
    //     name: 'Diana Ayi',
    //     job: 'Circuit Guide',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // },
    // {
    //     id: 6,
    //     image: Guide6,
    //     name: 'Wayne Carter',
    //     job: 'Physical Intelligence Guide',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // }
]