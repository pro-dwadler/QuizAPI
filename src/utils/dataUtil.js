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
        date: formatDate("2024-06-10"),
        modules: [

            {
                type: 'ANAGRAM',
                theme: 'Queer Musicians',
                queries: [
                    {
                        index: 1,
                        query: 'Cider Furry Meed',
                        reply: 'Freddie Mercury'
                    },
                    {
                        index: 2,
                        query: 'Aloe Jenn Male',
                        reply: 'Janelle Monae'
                    },
                    {
                        index: 3,
                        query: 'Clatterer Theory',
                        reply: 'Tyler the Creator'
                    },
                    {
                        index: 4,
                        query: 'Lucy Misery',
                        reply: 'Miley Cyrus'
                    },
                    {
                        index: 5,
                        query: 'Emu Furs Peeing',
                        reply: 'Perfume Genius'
                    },
                    {
                        index: 6,
                        query: 'A Embroiling Jostler',
                        reply: 'Billie Joe Armstrong'
                    },
                    {
                        index: 7,
                        query: 'Hero Jolt Sinn',
                        reply: 'Sir Elton John '
                    },
                    {
                        index: 8,
                        query: 'Ribber Sheepdog',
                        reply: 'Phoebe Bridgers'
                    },
                    {
                        index: 9,
                        query: 'Hangnails Omelette',
                        reply: 'Megan Thee Stallion'
                    },
                    {
                        index: 10,
                        query: 'A Moral Pool',
                        reply: 'Omar Apollo'
                    }
                ]
            },
            {
                type: 'EASY',
                queries: [
                    {
                        index: 1,
                        query: 'Which element has the chemical symbol Fe?',
                        reply: 'Iron'
                    },
                    {
                        index: 2,
                        query: 'Which is the longest river?',
                        reply: 'Nile'
                    },
                    {
                        index: 3,
                        query: 'What is the second most spoken language in Spain?',
                        reply: 'Catalan'
                    },
                    {
                        index: 4,
                        query: '[Riddle] How does a non-binary person kill someone?',
                        reply: 'They-Slash-Them (or another accepted one, by slaying)'
                    },
                    {
                        index: 5,
                        query: 'In Greek mythology, who is the queen of underworld and wife of Hades?',
                        reply: 'Persephone'
                    },
                    {
                        index: 6,
                        query: 'What is the fictional city of Batman?',
                        reply: 'Gotham city'
                    },
                    {
                        index: 7,
                        query: 'In Indian cooking, what is the mixture of ground spices called?',
                        reply: 'Masala'
                    },
                    {
                        index: 8,
                        query: 'In the Queer Rainbow flag, what color does red represent?',
                        reply: 'Life'
                    },
                    {
                        index: 9,
                        query: 'In the US Office version, which city do they live in?',
                        reply: 'Scranton'
                    },
                    {
                        index: 10,
                        query: 'When was the first IPhone released? +-1',
                        reply: '2007'
                    }
                ]
            },
            {
                type: 'MEDIUM',
                queries: [
                    {
                        index: 1,
                        query: 'Fill in the blanks, Lana Del Rey\'s album is called \'Did you know there\'s a tunner under _____ _____\' ?',
                        reply: 'Ocean Blvd'
                    },
                    {
                        index: 2,
                        query: 'Which city did Napoleon got exiled the second time?',
                        reply: 'St Helena'
                    },
                    {
                        index: 3,
                        query: 'What does the following 3 slang refer to (i) Shove Devil (ii) Shaft of delight (iii) Belly Ticker ?',
                        reply: 'Penises'
                    },
                    {
                        index: 4,
                        query: 'What\'s the difference between a coffin and a casket?',
                        reply: 'Coffin gets wider at shoulders and taper thinner at feet while casket is rectangular'
                    },
                    {
                        index: 5,
                        query: 'Name song and the artist: Blue as the sky, sunburnt and lonely; Sipping tea in a bar by the roadside; Don\'t you let those other boys fool you; Got to love that afro hairdo?',
                        reply: 'Put Your Records On by Corinne Bailey Rae'
                    },
                    {
                        index: 6,
                        query: 'Who is the first female president of Mexico?',
                        reply: 'Claudia Sheinbaum'
                    },
                    {
                        index: 7,
                        query: 'What does FLINTA stands for?',
                        reply: 'Female, Lesbian, Intersex, Trans and Agender'
                    },
                    {
                        index: 8,
                        query: 'Which accoding to MTV\'s is the most controversial music video?',
                        reply: 'Like a Prayer by Madonna'
                    },
                    {
                        index: 9,
                        query: 'Which poison does apple seed contain?',
                        reply: 'cyanide'
                    },
                    {
                        index: 10,
                        query: 'What is the solid remain of grapes, olives, or other fruit called after pressing for juice or oil?',
                        reply: 'Pomace'
                    }
                ]
            },
            {
                type: 'MUSIC',
                theme: 'No Theme. All songs are LGBTQ anthems. And music only played for one second (for the last one maybe 10 sec)',
                queries: [
                    {
                        index: 1,
                        query: 'https://www.youtube.com/watch?v=gD6cPE2BHic',
                        artist: 'Sylvester',
                        title: 'You Make Me Feel'
                    },
                    {
                        index: 2,
                        query: 'https://www.youtube.com/watch?v=LPn0KFlbqX8',
                        artist: 'Cyndi Lauper',
                        title: 'True Colors'
                    },
                    {
                        index: 3,
                        query: 'https://www.youtube.com/watch?v=GuJQSAiODqI',
                        artist: 'Madonna',
                        title: 'Vogue'
                    },
                    {
                        index: 4,
                        query: 'https://www.youtube.com/watch?v=N3RB_56WziA',
                        artist: 'RuPaul',
                        title: 'Cover Girl'
                    },
                    {
                        index: 5,
                        query: 'https://www.youtube.com/watch?v=6dYWe1c3OyU',
                        artist: 'Gloria Gaynor',
                        title: 'I Will Survive'
                    },
                    {
                        index: 6,
                        query: 'https://www.youtube.com/watch?v=QGJuMBdaqIw',
                        artist: 'Katy Perry',
                        title: 'Firework'
                    },
                    {
                        index: 7,
                        query: 'https://www.youtube.com/watch?v=uo5o_R8txUo',
                        artist: 'Village People',
                        title: 'Macho Man'
                    },
                    {
                        index: 8,
                        query: 'https://www.youtube.com/watch?v=qbs3aAxha70',
                        artist: 'Barbra Streisand',
                        title: 'Don\'t Rain On My Parade'
                    },
                    {
                        index: 9,
                        query: 'https://www.youtube.com/watch?v=AJWtLf4-WWs',
                        artist: 'Britney Spears',
                        title: 'Stronger'
                    },
                    {
                        index: 10,
                        query: 'https://www.youtube.com/watch?v=yEbaeLv-aOo',
                        artist: 'Donna Summer',
                        title: 'I Feel Love'
                    }
                ]
            },
            {
                type: 'HARD',
                queries: [
                    {
                        index: 1,
                        query: 'What\'s the term used in ballroom culture, which the LGBT brought back to life as a slang term which means to gather as a group for the purpose of gossip and chit chat?',
                        reply: 'Kiki'
                    },
                    {
                        index: 2,
                        query: 'Dog\'s have these muscles, Laom and Raol, which are missing in the wolves, where are they located?',
                        reply: 'Eyes'
                    },
                    {
                        index: 3,
                        query: 'What\'s the currency of Laos?',
                        reply: 'Kip'
                    },
                    {
                        index: 4,
                        query: 'What\'s the first artificial sattelite called?',
                        reply: 'Sputnik I'
                    },
                    {
                        index: 5,
                        query: 'Which artist has the name Alejandra Ghersi Rodriguez (hint: born with the name Alejandro)?',
                        reply: 'Arca'
                    },
                    {
                        index: 6,
                        query: 'What are the common opening words of Star Wars movies?',
                        reply: 'A long time ago in a galaxy far, far away ...'
                    },
                    {
                        index: 7,
                        query: 'What\'s the fastest time for 100km worlds men\'s marathon? +-10mins',
                        reply: '6 hours 5 minutes 35 seconds'
                    },
                    {
                        index: 8,
                        query: 'Erythrophobia is the fear of what? (hint: person with this fear fetured in Greys Anatomy to have it removed)',
                        reply: 'Blush'
                    },
                    {
                        index: 9,
                        query: 'Which show has the longest running queer character?',
                        reply: '(i) Callie Torres in Grey\'s Anatomy (ii) [Also accepted] Smithers in Simpsons'
                    },
                    {
                        index: 10,
                        query: 'Which is the largest religious monument in the world?',
                        reply: 'Angkor Wat'
                    }
                ]
            }
        ]
    }
}