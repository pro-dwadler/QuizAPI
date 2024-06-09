import dayjs from 'dayjs'

export function formatDate(date) {
    const dt = dayjs(new Date(date))
    return {
        day: dt.format("dddd"),
        date: dt.format("MMMM D"),
        year: dt.format("YYYY"),
    }
}

export async function getLastQuiz() {
    return {
        date: formatDate("2024-06-03"),
        modules: [

            {
                type: 'ANAGRAM',
                theme: 'Fashion Designers',
                queries: [
                    {
                        index: 1,
                        query: 'Brutish Inoculation',
                        reply: 'Christian Louboutin'
                    },
                    {
                        index: 2,
                        query: 'Jaguar Teal Lineup',
                        reply: 'Jean Paul Gaultier'
                    },
                    {
                        index: 3,
                        query: 'Relent Cataclysm',
                        reply: 'Stella McCartney'
                    },
                    {
                        index: 4,
                        query: 'Anger Axle Wand',
                        reply: 'Alexander Wang'
                    },
                    {
                        index: 5,
                        query: 'Acid Rica Puma',
                        reply: 'Miuccia Prada'
                    },
                    {
                        index: 6,
                        query: 'Caribbean Lilac Goats',
                        reply: 'Cristobal Balenciaga'
                    },
                    {
                        index: 7,
                        query: 'Baby Terror Hums',
                        reply: 'Thomas Burberry'
                    },
                    {
                        index: 8,
                        query: 'Drain Historic',
                        reply: 'Christian Dior'
                    },
                    {
                        index: 9,
                        query: 'Woven Tweed Vision',
                        reply: 'Vivienne Westwood'
                    },
                    {
                        index: 10,
                        query: 'Yahoo Oat Jimmy',
                        reply: 'Yohji Yamamoto'
                    }
                ]
            },
            {
                type: 'EASY',
                queries: [
                    {
                        index: 1,
                        query: 'What tile based game was developed in 19th century China with 144 tiles?',
                        reply: 'Mahjong'
                    },
                    {
                        index: 2,
                        query: 'Which Caribbean country played a key role in the missile scare?',
                        reply: 'Cuba'
                    },
                    {
                        index: 3,
                        query: 'What is the shape of DNA called?',
                        reply: 'Double Helix'
                    },
                    {
                        index: 4,
                        query: 'Germany has 3 city states i.e. which are city as well states like Berlin, What are the other two?',
                        reply: 'Bremen, Hamburg'
                    },
                    {
                        index: 5,
                        query: 'There is a protest planned on June 23rd in Paris. How are the people planning on protesting?',
                        reply: 'Flash mob to poop in the river'
                    },
                    {
                        index: 6,
                        query: 'Which is the largest tech company in South Korea?',
                        reply: 'Samsung'
                    },
                    {
                        index: 7,
                        query: 'There is an early online phenomemon called 6 degree of "what"?',
                        reply: 'Kevin Bacon'
                    },
                    {
                        index: 8,
                        query: 'Name the 4 countries which has Q in their names?',
                        reply: 'Qatar, Equatorial Guinea, Mozambique, Iraq'
                    },
                    {
                        index: 9,
                        query: 'Which animal is in the Porche logo?',
                        reply: 'Horse'
                    },
                    {
                        index: 10,
                        query: 'What grain is used to make Japanese sake?',
                        reply: 'Rice'
                    }
                ]
            },
            {
                type: 'MEDIUM',
                queries: [
                    {
                        index: 1,
                        query: 'Which country flag has a black double headed eagle on red background?',
                        reply: 'Albania'
                    },
                    {
                        index: 2,
                        query: 'In pastry and/or backery world, what\'s laminating?',
                        reply: 'Folding and rolling butter into dough'
                    },
                    {
                        index: 3,
                        query: 'Which element has chemical symbol Pb?',
                        reply: 'Lead'
                    },
                    {
                        index: 4,
                        query: 'Apart from being birds, what does Flamingos, Pigeons and Penguins (especially male emperor penguins)?',
                        reply: 'They produce milk'
                    },
                    {
                        index: 5,
                        query: 'What\'s the name of the monster in the epic poem Beowulf?',
                        reply: 'Grendel'
                    },
                    {
                        index: 6,
                        query: 'Which country joined NATO in march?',
                        reply: 'Sweden'
                    },
                    {
                        index: 7,
                        query: 'How many steps are there to reach the top of Berliner dome? +-30',
                        reply: '270'
                    },
                    {
                        index: 8,
                        query: 'Which voice actor is famous for voicing both Darth Vadar and Mustafa?',
                        reply: 'James Earl Jones'
                    },
                    {
                        index: 9,
                        query: 'What is the suffix of the word Helicopter?',
                        reply: 'pter'
                    },
                    {
                        index: 10,
                        query: 'Juggalos and Juggalette, are fan group of which singer/group?',
                        reply: 'Insane Clown Posse'
                    }
                ]
            },
            {
                type: 'MUSIC',
                theme: 'Old and New',
                queries: [
                    {
                        index: 1,
                        query: 'https://www.youtube.com/watch?v=LB5YkmjalDg',
                        artist: 'Huey Lewis & The News',
                        title: 'Hip To Be Square'
                    },
                    {
                        index: 2,
                        query: 'https://www.youtube.com/watch?v=gOd5E0HPNSs',
                        artist: 'Old',
                        title: 'Paul Simon'
                    },
                    {
                        index: 3,
                        query: 'https://www.youtube.com/watch?v=XXTzm5GtqVo',
                        artist: 'Got Your Money',
                        title: 'Ol\' Dirty Bastard'
                    },
                    {
                        index: 4,
                        query: 'https://www.youtube.com/watch?v=zndpi8tNZyQ',
                        artist: 'Neu!',
                        title: 'Hallogallo'
                    },
                    {
                        index: 5,
                        query: 'https://www.youtube.com/watch?v=1gX1EP6mG-E',
                        artist: 'Old Crow Medicine Show',
                        title: 'Wagon Wheel'
                    },
                    {
                        index: 6,
                        query: 'https://www.youtube.com/watch?v=QWfZ5SZZ4xE',
                        artist: 'Pattie LaBelle',
                        title: 'New Attitude'
                    },
                    {
                        index: 7,
                        query: 'https://www.youtube.com/watch?v=N2qk6VZokx0',
                        artist: 'Queen',
                        title: 'Good Old-Fashioned Lover Boy'
                    },
                    {
                        index: 8,
                        query: 'https://www.youtube.com/watch?v=rVeMiVU77wo',
                        artist: 'Alt-J',
                        title: 'Breezeblocks'
                    },
                    {
                        index: 9,
                        query: 'https://www.youtube.com/watch?v=KkvTYrFIxNM',
                        artist: 'Taylor Swift',
                        title: 'New Year\'s Day'
                    },
                    {
                        index: 10,
                        query: 'https://www.youtube.com/watch?v=oKR5beC4vkQ',
                        artist: 'New Boyz',
                        title: 'You\'re A Jerk'
                    }
                ]
            },
            {
                type: 'HARD',
                queries: [
                    {
                        index: 1,
                        query: 'Which movie in 1989 did Prince sang for?',
                        reply: 'Batman'
                    },
                    {
                        index: 2,
                        query: 'In 15th centruy, smallpox was called smallpox to distinguish it from which other disease?',
                        reply: 'Syphilis'
                    },
                    {
                        index: 3,
                        query: 'Who founded the Berliner Ensemble in 1949?',
                        reply: 'Helene Weigel and her husband, Bertolt Brecht'
                    },
                    {
                        index: 4,
                        query: 'Which country has hight female in parliament? (+1 point for top 3 countries)',
                        reply: 'Rwanda, Cuba,Nicaragua '
                    },
                    {
                        index: 5,
                        query: 'In which country has the largest TRex skeleton been found?',
                        reply: 'Canada'
                    },
                    {
                        index: 6,
                        query: 'Which artist made "The Dinner Party" art comprising of a banquet, arranged on a triangular table with total 39 place settingsm each for an important women in history?',
                        reply: 'Judy Chicago'
                    },
                    {
                        index: 7,
                        query: 'Name 2 of the 5 popular tags used in Grindr in 2023? (Grindr app each year releases intereting facts and tags are profile indications like twink, bear etc)',
                        reply: 'Hung, Trans, bb, dom, feet'
                    },
                    {
                        index: 8,
                        query: 'A capital in the southern hemisphere, whose english translation means "meeting place", and local people are called Ngambri and speak language Ngunnawal .',
                        reply: 'Canberra'
                    },
                    {
                        index: 9,
                        query: 'What\'s the first commandment? (vague idea is fine)',
                        reply: 'You shall have no other gods before me'
                    },
                    {
                        index: 10,
                        query: 'Who created small animations in Monty Python?',
                        reply: 'Terry Gilliam'
                    }
                ]
            }
        ]
    }
}