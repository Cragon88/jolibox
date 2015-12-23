// type: 1 - image (color); 2 - image (brand); 3 - image + text; 4 - image + name + text
var Quiz = [
  {
    type: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis varius sapien sed pretium?",
    colors: [
        "#fcefe5", "#efd2cc", "#deab7d", "#b67245", "#64321e", "#452c28"
    ]
  },
  {
    type: 2,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis varius sapien sed pretium?",
    images: [
      "http://placehold.it/300x300?text=Image", "http://placehold.it/300x300?text=Image", "http://placehold.it/300x300?text=Image",
      "http://placehold.it/300x300?text=Image", "http://placehold.it/300x300?text=Image", "http://placehold.it/300x300?text=Image"
    ]
  },
  {
    type: 3,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis varius sapien sed pretium?",
    images: [
      {
        title: "Title Something",
        image: "http://placehold.it/300x300?text=Image"
      }
    ]
  },
  {
    type: 4,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis varius sapien sed pretium?",
    images: [
      {
        title: "Title Something",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis varius sapien sed pretium.",
        image: "http://placehold.it/300x300?text=Image"
      }
    ]
  }
];
