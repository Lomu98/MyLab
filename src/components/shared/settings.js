export const SETTINGS = {
    jsonbin: "https://api.jsonbin.io/b/61c24ecff8c69823dd3fc1e5",
    product_profiles:3,
    n_attributes:9,
    n_questions:15 ,

    it: {
        attributes: {
            0: "Regista",
            1: "Tipologia di film",
            2: "Tipologia di personaggi",
            3: "Genere cinematografico",
            4: "Ambientazione geografica",
            5: "Collocazione temporale",
            6: "Numero di film",
            7: "Durata della pellicola",
            8: "Prima visione",
        },
        mask:{
            0: {0:'Christopher Nolan', 1:'Tim Burton', 2:'Steven Spielberg'},
            1: {0:'Film d\'animazione', 1:'Film con personaggi reali'},
            2: {0:'Esseri umani', 1:'Animali', 2:'Robot/androidi/umanoidi'},
            3: {0:'Fantascienza', 1:'Thriller', 2:'Avventura'},
            4: {0: 'Stati Uniti d\'America', 1:'Europa', 2:'Giappone', 3:'Marte'},
            5: {0:'Fine 1800', 1:'2022', 2:'2100'},
            6: {0:'Film unico', 1:'Saga'},
            7: {0:'1 ora e 40 minuti', 1:'2 ore', 2:'2 ore e 20 minuti'},
            8: {0:'Cinema', 1:'Piattaforme'},
        }
    },

    // ENGLISH
    en: {
        attributes: {
            0: "Director",
            1: "Type of film",
            2: "Type of characters",
            3: "Genre",
            4: "Geografical setting",
            5: "Temporal collocation",
            6: "Number of movies",
            7: "Duration of the film",
            8: "First viewing",
        },
        mask:{
            0: {0:'Christopher Nolan', 1:'Tim Burton', 2:'Steven Spielberg'},
            1: {0:'Animation film', 1:'Film with real characters'},
            2: {0:'Humans', 1:'Animals', 2:'Robots/androids/humanoids'},
            3: {0:'Science-fiction', 1:'Thriller', 2:'Adventure'},
            4: {0: 'United States of America', 1:'Europe', 2:'Japan', 3:'Mars'},
            5: {0:'End of the 19th century', 1:'2022', 2:'2100'},
            6: {0:'Only one film', 1:'Saga'},
            7: {0:'1 hour and 40 minutes', 1:'2 hours', 2:'2 hours and 20 minutes'},
            8: {0:'Cinema', 1:'Platforms'},
        }
    },
};
