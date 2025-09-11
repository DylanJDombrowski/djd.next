export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  link: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dylan delivered our website with exceptional skill and insight. He attentively listened to our needs, provided prompt solutions with creative additions, and helped us structure our data effectively. His work has helped us build a robust following and share information efficiently. He's always diligent with responses and a pleasure to work with.",
    name: "Rodney Coffey",
    title: "Business Development Director",
    link: "https://www.linkedin.com/in/dylanjdombrowski/details/recommendations/",
  },
  // To add another testimonial, just copy the object above and paste it here.
];
