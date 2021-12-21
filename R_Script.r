
attrib_c <- list(
               "0" = c(0, 1, 2),
               "1" = c(0, 1),
               "2" = c(0, 1, 2),
               "3" = c(0, 1),
               "4" = c(0,1,2,3),
               "5" = c(0,1,2),
               "6" = c(0,1,2),
               "7" = c(0,1),
               "8" = c(0,1,2))

# where 0 then will be whatever price you want but now is important that this variables are encoded in this way.
df <- expand.grid(attrib_c) # all possible profiles
df$id <- seq(nrow(df)) # include ID 


'''
Regista: Christopher Nolan, Tim Burton, Steven Spielberg
Protagonista maschile (Tom Cruise, Will Smith, Johnny Depp)
Protagonista femminile (Natalie Portman, Jennifer Lawrence, Margot Robbie)
Tipologia (film d’animazione, film con persone)
Personaggi (umani, animali, robot)
Prima visione (cinema, piattaforme) / cinema (si, no) / prezzo (no, 3.99$) / (disclaimer: hai già l’abbonamento)
Location (USA, Europa, Giappone, Marte)
Ambientazione storica (Fine ‘800, 2022, 2100)
Genere (Fantascienza, Thriller, Avventura)
Numero di film (film unico, saga) / saga (sì, no)
Compositore (Hans Zimmer, John Williams, Alan Silvestri)
Durata (100’, 120’, 140’)
'''

## Write the JSON FILE
library(RJSONIO)
jsonDF <- jsonlite::toJSON(df)
write(jsonDF, file='data.json')