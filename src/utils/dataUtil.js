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
        date: formatDate("2024-07-08"),
        modules: [

            {
                type: 'ANAGRAM',
                theme: 'One hit wonder songs of the 2000s',
                queries: [
                    {
                        index: 1,
                        query: 'Badge Integrate',
                        reply: 'Teenage Dirtbag'
                    },
                    {
                        index: 2,
                        query: 'Goth Shouted Twoel',
                        reply: 'Who Let The Dogs Out'
                    },
                    {
                        index: 3,
                        query: 'Asthma Delusion',
                        reply: 'Thousand Miles'
                    },
                    {
                        index: 4,
                        query: 'Hollow Reviewer Guy',
                        reply: 'Wherever You Will Go'
                    },
                    {
                        index: 5,
                        query: 'Health Here Yield',
                        reply: 'Hey There Delilah'
                    },
                    {
                        index: 6,
                        query: 'All Heist Nightshades',
                        reply: 'All The Things She Said'
                    },
                    {
                        index: 7,
                        query: 'Funky Logos',
                        reply: 'Young Folks'
                    },
                    {
                        index: 8,
                        query: 'A Chin Scrags',
                        reply: 'Chasing Cars'
                    },
                    {
                        index: 9,
                        query: 'Loofah Ate Views',
                        reply: 'How To Save A Life'
                    },
                    {
                        index: 10,
                        query: 'Leveled Bingo',
                        reply: 'Bleeding Love'
                    }
                ]
            },
            {
                type: 'EASY',
                queries: [
                    {
                        index: 1,
                        query: 'What\'s the currency of India?',
                        reply: 'Indian Rupee'
                    },
                    {
                        index: 2,
                        query: 'In Gossip Girl, which part of Manhattan is home to the majority of characters?',
                        reply: 'The Upper East Side'
                    },
                    {
                        index: 3,
                        query: 'Which sauce is a mixture of melted butter, egg yolk and lemon juice?',
                        reply: 'Hollandaise Sauce'
                    },
                    {
                        index: 4,
                        query: 'Solve the riddle: What occurs, once in a minute, twice in a moment, never in a thousand years?',
                        reply: 'M\'s in the word minute, moment and thousand years'
                    },
                    {
                        index: 5,
                        query: 'What is the Latin word for Goddess?',
                        reply: 'Diva'
                    },
                    {
                        index: 6,
                        query: 'Which move is this quote from? "Life was like a box of chocolates. You never know what you\'re gonna get."',
                        reply: 'Forrest Gump'
                    },
                    {
                        index: 7,
                        query: 'What is the national animal of Germany?',
                        reply: 'Eagle'
                    },
                    {
                        index: 8,
                        query: 'In the TV show, Breaking Bad, what subject did Walter White teach?',
                        reply: 'Chemistry'
                    },
                    {
                        index: 9,
                        query: 'Which species does all human beings belong to?',
                        reply: 'Homo Sapiens'
                    },
                    {
                        index: 10,
                        query: 'What does the black ring in the Olympic rings represent',
                        reply: 'Africa'
                    }
                ]
            },
            {
                type: 'MEDIUM',
                queries: [
                    {
                        index: 1,
                        query: 'In which year were all these three songs released? Bad Day by Daniel Powter, You\'re Beautiful by James Blunt, Hollaback Girl by Gwen Stefani',
                        reply: '2005'
                    },
                    {
                        index: 2,
                        query: 'What\'s the filling inside burrata cheese?',
                        reply: 'Stracciatella'
                    },
                    {
                        index: 3,
                        query: 'Which ancient city contained the Hanging Gardens?',
                        reply: 'Babylon'
                    },
                    {
                        index: 4,
                        query: 'What does the long, slow speech intended to stall a vote called?',
                        reply: 'Filibuster'
                    },
                    {
                        index: 5,
                        query: 'What song are these lyrics from? Inside, we both know what\'s been going on. We know the game and we\'re gonna play it, and if you ask me how I\'m feeling. Don\'t tell me you\'re too blind to see',
                        reply: 'Never Gonna Give You Up'
                    },
                    {
                        index: 6,
                        query: 'What\'s the deepest or lowest voice in Opera or classical music for women?',
                        reply: 'Contralto (or alto)'
                    },
                    {
                        index: 7,
                        query: 'What\'s the name this singer is famous by? Aubrey Graham',
                        reply: 'Drake'
                    },
                    {
                        index: 8,
                        query: 'According to the cost of living, which is the Europe\'s most expensive living?',
                        reply: 'Zurich'
                    },
                    {
                        index: 9,
                        query: 'What does Chai mean Chai Latte?',
                        reply: 'Tea'
                    },
                    {
                        index: 10,
                        query: 'According to Greek mythology, how was the Milky Way formed? (Includes Zeus, Hera, Heracles)',
                        reply: 'Any answer related to Hera\'s breast milk is valid. Long story: Zeus decided to let the infant Heracles suckle on his wife Hera\'s milk when she was asleep, an act which would endow the baby with godlike qualities. When Hera woke up and realized that she was breastfeeding an unknown infant, she pushed him away and the spurting milk became the Milky Way'
                    }
                ]
            },
            {
                type: 'MUSIC',
                theme: 'Fruits',
                queries: [
                    {
                        index: 1,
                        query: 'https://www.youtube.com/watch?v=9wg3v-01yKQ',
                        artist: 'Harry Styles',
                        title: 'Kiwi'
                    },
                    {
                        index: 2,
                        query: 'https://www.youtube.com/watch?v=nO6y1-erVEw',
                        artist: 'Blood Orange',
                        title: 'Champagne Coast'
                    },
                    {
                        index: 3,
                        query: 'https://www.youtube.com/watch?v=2BTVsWPx84U',
                        artist: 'Mitski',
                        title: 'Strawberry Blond'
                    },
                    {
                        index: 4,
                        query: 'https://www.youtube.com/watch?v=3wk7C64kaP4',
                        artist: 'The Smashing Pumpkins',
                        title: 'Zero'
                    },
                    {
                        index: 5,
                        query: 'https://www.youtube.com/watch?v=08qd-vsHbaY',
                        artist: 'Beach House',
                        title: 'Lemon Glow'
                    },
                    {
                        index: 6,
                        query: 'https://www.youtube.com/watch?v=3qVPNONdF58',
                        artist: 'Blind Melon',
                        title: 'No Rain'
                    },
                    {
                        index: 7,
                        query: 'https://www.youtube.com/watch?v=CmlnO1EwCT4',
                        artist: 'Fiona Apple',
                        title: 'Across the Universe'
                    },
                    {
                        index: 8,
                        query: 'https://www.youtube.com/watch?v=L3QrddMUghs',
                        artist: 'Lana Del Rey',
                        title: 'Cherry'
                    },
                    {
                        index: 9,
                        query: 'https://www.youtube.com/watch?v=EgfsXTOn_pI',
                        artist: 'Drake',
                        title: 'Passionfruit'
                    },
                    {
                        index: 10,
                        query: 'https://www.youtube.com/watch?v=G6Kspj3OO0s',
                        artist: 'The Cranberries',
                        title: 'Linger'
                    }
                ]
            },
            {
                type: 'HARD',
                queries: [
                    {
                        index: 1,
                        query: 'Where is the headquarters of the CIA?',
                        reply: 'Langley'
                    },
                    {
                        index: 2,
                        query: 'What\'s the difference between silk and satin?',
                        reply: 'Silk is a natural fiber(from silkworm) while satin is a synthetic fibre'
                    },
                    {
                        index: 3,
                        query: 'What do these words have in common? Dreamcatcher, Red Velvet, Orange Caramel, After School',
                        reply: 'K-pop groups'
                    },
                    {
                        index: 4,
                        query: 'What\'s the logo/symbol of Maserati?',
                        reply: 'Trident'
                    },
                    {
                        index: 5,
                        query: 'What is the primary collection of religious texts of Zoroastrianism called?',
                        reply: 'Avesta'
                    },
                    {
                        index: 6,
                        query: 'Daydreamers is the fandom name of which musician?',
                        reply: 'Adele'
                    },
                    {
                        index: 7,
                        query: 'According to Forbes 2023, who is the world\'s most powerful woman?',
                        reply: 'Ursula von der Leyen'
                    },
                    {
                        index: 8,
                        query: 'What are the following types of? Fairy, Macaroni, King, Chinstrap',
                        reply: 'Penguin'
                    },
                    {
                        index: 9,
                        query: 'Which dynasty was Cleopatra part of?',
                        reply: 'Ptolemy Dynasty'
                    },
                    {
                        index: 10,
                        query: 'What was the name of the boat in the movie Jaws?',
                        reply: 'Orca'
                    }
                ]
            }
        ]
    }
}
