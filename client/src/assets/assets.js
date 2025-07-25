import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import sample_img_3 from './sample_img_3.png'
import sample_img_4 from './sample_img_4.png'
import sample_img_5 from './sample_img_5.png'
import sample_img_6 from './sample_img_6.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import profile_img_3 from './profile_img_3.avif'
import github_icon from './github_icon.svg'
import linkedin_icon from './linkedin_icon.svg'

export const assets = {
    logo,
    logo_icon,
    github_icon,
    linkedin_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    sample_img_3,
    sample_img_4,
    sample_img_5,
    sample_img_6,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download',
      description: 'Instantly download your creation or share it with the world.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Frederick Ruell',
        role:'Graphic Designer',
        stars:5,
        text:`I loved how the image generated within seconds and matched my input perfectly!`
    },
    {
        image:profile_img_2,
        name:'Robin Parham',
        role:'Content Creator',
        stars:4,
        text:`Great tool for quick visual ideas! Just wish I could choose the image size before generating.`
    },
    {
        image:profile_img_3,
        name:'Philip Welch',
        role:'Web Designer',
        stars:5,
        text:`Works great on my phone and looks amazing. Please add a dark mode for better viewing.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]