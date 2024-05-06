const model = {
  app: {
    page: 'chatPage',
    currentUser:    {
      displayedUsers: [],
    },
    isAdmin: false,
  },

  inputs: {
    logIn: {
      username: null,
      password: null,
    },

    myProfilePage: {
      name: null,
      age: null,
      interests: null,
      pictures: null,
    },

    chat: {
      userId: null,
      message: {
        senderId: null,
        content: null,
        contentType: null,
      },
      picture: null,
    },
  },

  data: {
    users: [
      {
        userId: 1, //user id used to identify user
        username: "berit", //used to log in
        password: "123", // --||--
        name: "Berit",
        age: 25,
        interests: ["ski", "bøker"],
        profilePicture: "allPics/beritPics/berit.png",
        photoLibrary: ["berit1.png, berit2.png, berit3.png"],
        sentPhotos: [],
        sentTexts: [],
        likedUsers: [],
        displayedUsers: [],
        chats: [
          {
            userId: 3, // ID of the user is chatting with
            messages: [
              {
                senderId: 1, //ID
                content: ":)", 
                contentType: "text",
              },
              {
                senderId: 3, // ID of the other user
                content: "heihei", // Other user's message
                contentType: "text",
              },
              // More messages 
            ],
          },
        ],
      },
      {
        userId: 2,
        username: "amanda00",
        password: "abc123",
        name: "Amanda",
        age: 24,
        interests: ["katter", "katter"],
        profilePicture: "allPics/amandaPics/amanda.png",
        photoLibrary: ["amanda1.png, amanda2.png, amanda3.png"],
        sentPhotos: ["amanda_photo_1.png", "amanda_photo_2.png"],
        sentTexts: [],
        likedUsers: [],
        displayedUsers: [],
        chats: [
          {
            userId: 1, // ID of the user is chatting with
            messages: [
              {
                senderId: 2, // Amanda's ID
                content: "Hey there!", // Amanda's message
                contentType: "text",
              },
              {
                senderId: 1, // ID of the other user
                content: "Hi Amanda!", // Other user's message
                contentType: "text",
              },
              // More messages 
            ],
          },
          // More chats 
        ],
      },
      {
        userId: 3,
        username: "StineHest23",
        password: "hesterbest",
        name: "Stine",
        age: 22,
        interests: ["hest", "klatring"],
        profilePicture: "allPics/stinePics/stine.png",
        photoLibrary: ["stine1.png, stine2.png, stine3.png"],
        sentPhotos: [],
        sentTexts: [],
        likedUsers: [],
        displayedUsers: [],
        chats: [
          {
            userId: 1, // ID
            messages: [
              {
                senderId: 3, //ID
                content: "Hey there!",
                contentType: "text",
              },
              {
                senderId: 1, // ID of the other user
                content: "Helloooo!", // Other user's message
                contentType: "text",
              },
              // More messages 
            ],
          },
          // More chats 
        ],
      },
    ],
  },
};
