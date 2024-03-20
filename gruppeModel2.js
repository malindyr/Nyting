const model2 = {
    app: {
        isDarkMode: false,
        currentPage: 'activityInfo',
    },
    inputs: {
        search: null,
    },
    data: {
        activityInfo: {
            picture: "nordmarka.png",
            organizer: "Lise Åstad",
            location: "Nordmarka",
            participants: {
                users: [/*Linn Pedersen, Ove Tjelta*/],
                max: 10,
                currentNr: this.users.length
            },
            eventName: "Gå tur i marka",
            eventDate: { year: 2024, month: 3, day: 20 },
            eventTime: { hour: 14, minutes: 0 },
            isPrivate: true,
        },
    }

}