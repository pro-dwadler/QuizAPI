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
        date: formatDate("2024-07-01"),
        modules: [

            {
                type: 'ANAGRAM',
                theme: 'Reed Instruments',
                queries: [
                    {
                        index: 1,
                        query: 'Acrobatics Lanterns',
                        reply: 'Contrabass Clarinet'
                    },
                    {
                        index: 2,
                        query: 'Neon Girl Shh',
                        reply: 'English Horn'
                    },
                    {
                        index: 3,
                        query: 'Maniac Mohair Crotch',
                        reply: 'Chromatic Harmonica'
                    },
                    {
                        index: 4,
                        query: 'Acid Mole',
                        reply: 'Melodica'
                    },
                    {
                        index: 5,
                        query: 'Boor Weenie',
                        reply: 'Wiener Oboe'
                    },
                    {
                        index: 6,
                        query: 'Orange Pip',
                        reply: 'Pipe Organ'
                    },
                    {
                        index: 7,
                        query: 'Compote Culprit',
                        reply: 'Piccolo Trumpet'
                    },
                    {
                        index: 8,
                        query: 'Hornets Hop',
                        reply: 'Rothphones'
                    },
                    {
                        index: 9,
                        query: 'Hasten Poor Oxen',
                        reply: 'Tenor Saxophone'
                    },
                    {
                        index: 10,
                        query: 'Racoons Batons',
                        reply: 'Contrabassoon'
                    }
                ]
            },
            {
                type: 'EASY',
                queries: [
                    {
                        index: 1,
                        query: 'How many syllables in a haiku?',
                        reply: '17 = 3 lines of (5, 7, 5) syllables'
                    },
                    {
                        index: 2,
                        query: 'Which is the internet(meme) famour dog breed present in Dogecoin logo ?',
                        reply: 'Shiba Inu'
                    },
                    {
                        index: 3,
                        query: 'Which two teams won their matches in UEFA Euro football championship on Saturday(29.06.24)?',
                        reply: 'Germany and Switzerland'
                    },
                    {
                        index: 4,
                        query: 'Which is the longest mountain range in South America?',
                        reply: 'Andes'
                    },
                    {
                        index: 5,
                        query: 'What are the two ingredients in the Bellini cocktail, created between 1930s and 1940s in Venice Italy?',
                        reply: 'Peach and Prosecco'
                    },
                    {
                        index: 6,
                        query: 'The TV show, Sex And The City, nearly tripled the sales of which shoe brand?',
                        reply: 'Manolo Blahnik'
                    },
                    {
                        index: 7,
                        query: 'Which number comes first alphabetically?',
                        reply: 'Eight'
                    },
                    {
                        index: 8,
                        query: 'The hip-hop back, OutKast, in the 2000s apologized to which lady?',
                        reply: 'Ms. Jackson'
                    },
                    {
                        index: 9,
                        query: 'The 1981 film, Lion of the Desert, about the war between Italy and Libya, was funded in past by which world leader/party?',
                        reply: 'Gaddafi'
                    },
                    {
                        index: 10,
                        query: 'What is the first name of the painter Cézanne?',
                        reply: 'Paul'
                    }
                ]
            },
            {
                type: 'MEDIUM',
                queries: [
                    {
                        index: 1,
                        query: 'Who are the three headliners of the Pyramid stage in the Glastonbury festival?',
                        reply: 'Dua Lipa, Coldplay and SZA'\
                    },
                    {
                        index: 2,
                        query: 'What percentage of DNA matches between a human and a chimpanzee (+-5%)?',
                        reply: '98.8%'
                    },
                    {
                        index: 3,
                        query: 'The ancient city of Babylon, is located in which current world country?',
                        reply: 'Iraq'
                    },
                    {
                        index: 4,
                        query: 'Who was the first trans women on the Time magazine (happened in 2014)?',
                        reply: 'Laverne Cox'
                    },
                    {
                        index: 5,
                        query: 'What sequence is this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34?',
                        reply: 'Fibonacci Sequence'
                    },
                    {
                        index: 6,
                        query: 'How many players are in one ice hockey team?',
                        reply: 'Six'
                    },
                    {
                        index: 7,
                        query: 'Where is the Buccinator muscle locatedd? Be specific, not leg but shin',
                        reply: 'Cheeks'
                    },
                    {
                        index: 8,
                        query: 'What\'s happening in this video? https://www.youtube.com/watch?v=J---aiyznGQ',
                        reply: 'Keyboard cat'
                    },
                    {
                        index: 9,
                        query: 'Agent Provocateur, is the retailer of what genre of item?',
                        reply: 'Lingerie'
                    },
                    {
                        index: 10,
                        query: 'The asteroid belt is between which two planets?',
                        reply: 'Mars and Jupiter'
                    }
                ]
            },
            {
                type: 'MUSIC',
                theme: 'Elements (earth, wind, fire, water)',
                queries: [
                    {
                        index: 1,
                        query: 'https://www.youtube.com/watch?v=Lrle0x_DHBM',
                        title: 'Let\'s Groove',
                        artist: 'Earth, Wind & Fire'
                    },
                    {
                        index: 2,
                        query: 'https://www.youtube.com/watch?v=zQX2q6WCrbE',
                        artist: 'Crystal Waters',
                        title: '100% Pure Love'
                    },
                    {
                        index: 3,
                        query: 'https://www.youtube.com/watch?v=haW_ruZ_Be8',
                        artist: 'Franz Ferdinand',
                        title: 'This Fire'
                    },
                    {
                        index: 4,
                        query: 'https://www.youtube.com/watch?v=8WEtxJ4-sh4',
                        artist: 'TLC',
                        title: 'Waterfalls'
                    },
                    {
                        index: 5,
                        query: 'https://www.youtube.com/watch?v=1xLUO4qXEyw',
                        artist: 'Nelly',
                        title: 'Air Force One'
                    },
                    {
                        index: 6,
                        query: 'https://www.youtube.com/watch?v=Mk_GmhD053E',
                        title: 'Santa Baby',
                        artist: 'Eartha Kitt'
                    },
                    {
                        index: 7,
                        query: 'https://www.youtube.com/watch?v=IQBC5URoF0s',
                        artist: 'Fela Kuti',
                        title: 'Water no get enemy'
                    },
                    {
                        index: 8,
                        query: 'https://www.youtube.com/watch?v=wmin5WkOuPw',
                        artist: 'The Prodigy',
                        title: 'Firestarter'
                    },
                    {
                        index: 9,
                        query: 'https://www.youtube.com/watch?v=JWdZEumNRmI',
                        artist: 'Air Supply',
                        title: 'All Out Of Love'
                    },
                    {
                        index: 10,
                        query: 'https://www.youtube.com/watch?v=j2F4INQFjEI',
                        artist: 'Belinda',
                        title: 'Heaven Is A Place On Earth'
                    }
                ]
            },
            {
                type: 'HARD',
                queries: [
                    {
                        index: 1,
                        query: 'Where does the phrase \'dog days of summer\' comes from? It refers to the hottest days of the summer/year',
                        reply: 'Rise of the Sirius star system'
                    },
                    {
                        index: 2,
                        query: 'China has a type of work culture called 996. What do these numbers represent?',
                        reply: '9:00 am to 9:00 pm, 6 days per week'
                    },
                    {
                        index: 3,
                        query: 'Espophagus/Oesophagus muscle, part of the digestive system connecting the pharynx to the stomach, moves in a wave like manner. What is this movement called?',
                        reply: 'Peristaltic movement'
                    },
                    {
                        index: 4,
                        query: 'All gemstones are evaluted using a system called 4 Cs. What do they stand for?',
                        reply: 'Cut, Color, Clarity and Carat'
                    },
                    {
                        index: 5,
                        query: 'What is the oldest botanical garden in Germany? This garden moved around within the same city and datae back to 1542. It was then destroyed in the Thirty Years\' War and moved in 1648. Moved again in 1807. Extended in 1895. Entirely destroyed in WW-II and restored in 1954. After reunification, was completely renovated and now stands in the same place',
                        reply: 'Leipzig'
                    },
                    {
                        index: 6,
                        query: 'The line \'hell is other people\' was part of which Sartre play?',
                        reply: 'No Exit'
                    },
                    {
                        index: 7,
                        query: 'The First lady Dr. Jill Biden, during the last Friday\'s(28.06.24) rally wore custom dress by the American designer Christian Siriano. What was unique about this dress?',
                        reply: 'Vote printed all over the dress'
                    },
                    {
                        index: 8,
                        query: 'The flag of China has one big star and four small yellow stars on a red background. What do these stars represent?',
                        reply: 'The big star stands for the communist government, and the four small stars stand for the workers, peasants, middle-class citizens and soldiers'
                    },
                    {
                        index: 9,
                        query: 'What does Nappe mean in the world of cooking?',
                        reply: 'Nappe is a French term describing the consistency of a sauce that will coat the back of a spoon'
                    },
                    {
                        index: 10,
                        query: 'What sea is San Sebastian on?',
                        reply: 'Cantabrian Sea'
                    }
                ]
            }
        ]
    }
}
