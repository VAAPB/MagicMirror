var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Woodstock,VA',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: '5ce64a1fd92eb3ef9d0cbbbef3cf1a54'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look great!',
            'You look nice!',
            'Hello beautiful!'
        ]
    },
    calendar: {
        maximumEntries: 10,
        url: "https://www.google.com/calendar/ical/underdevit.com_46n0kch52ebo5295k07fpdu31g%40group.calendar.google.com/public/basic.ics"
    },
    news: {
        feed: 'http://rss.cnn.com/rss/cnn_topstories.rss'
    }
};

responsiveVoice.setDefaultVoice("US English Female");
