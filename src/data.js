export const products = [
  {
    id: 1,
    title: "EasyRent",
    desc:
      "The subject of the project is renting apartments. On the App you can register and view a selection of apartments. An apartment owner? You can upload an apartment to the site and after approval by the manager it will be shown to all users.",
    features: [
      "2 languages app(hebrew and english)",
      "Chatbot that save user prefrences, the system knows to recognize when relvant apartments upload and send am email to the user",
      "Log in via google",
      "Filtered search",
      "Account verifcation by email",
    ],
    img: "easy.png",

    link: "https://easyrent2023.herokuapp.com/",
  },
  {
    id: 3,
    title: "ChatApp",
    desc:
      "The subject of the project is Live chat. On the App you can register, Search and add users to start a chat with them. The app is built with with socket io, so if the 2 users are connected you can chat LIVE.",
    features: [
      "Opening chat groups with multiple users",
      "You will be able to know whether the user is connected to the app or not",
      "Notifications - If messages have been sent to you and you are connected but not in the specific chat, or not connected at all, notifications wiil be sent and appear at the top of the chat",
      "Live update if the user you are chatting with is typing",
    ],
    img: "chat.png",

    link: "https://talk-a-tive-2022.herokuapp.com/",
  },
  {
    id: 2,
    title: "ShoppingApp",
    desc:
      "The subject of the project is Online shopping. On the App you can register and view a selection of products divided into categories. You can build yourself a diverse shopping basket and place an order to your home.",
    features: [
      "Product search",
      "Build shopping cart",
      "The system knows how to identify previous purchases that have not ended and let the user continue with them",
    ],
    img: "shopping.png",
    link: "https://laughing-johnson-d68122.netlify.app/",
  },

  {
    id: 4,
    title: "Wordle",
    desc: `The famous Wordle game. On the App you have 6 guesses each time to guess a selected 5-letter word.
              If the letter you guessed is in the selected word in the same place the letter will be colored green. If the letter present but not in the same place it will be
              colored orange and if it is not present at all it will be colored gray.
              Good luck!`,
    features: [
      "Identifying words that are not in the database",
      "Identifying each letter and comparing it to the corresponding letter in the selected word",
    ],
    img: "wordle.png",

    link: "https://beautiful-cocada-ee32a7.netlify.app/",
  },
];
