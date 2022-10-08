const quotes = [`"I was having twelve percent of a moment." - Pepper Potts`, `"Give me a scotch. I'm starving." - Tony Stark`, `"I can do this all day." - Steve Rogers`, `"This drink… I like it!" - Thor, referring to coffee`, `"Doth mother know you wear-eth her drapes?" - Tony Stark`, `"On your left" - Steve Rogers`, `"The crabby puppy is so cute he makes me wanna die!" - Mantis`, `"Cuttlefish!" - Ulysses Klaue`, `"Baskin-Robbins always finds out." - Scott Lang's Manager`, `"Do you lay eggs?" - Ned`, `"Behold! My stuff." - Skurge`, `"What's the matter with you kids? You never seen a spaceship before?" - Stan Lee`, `"Hand." -King Shark`, `"You should be very proud." - Wonder Woman, upon the discovery of ice cream`];

const quoteGenerator = () => {
    let i = Math.floor(Math.random() * 14)
    //console.log(i);
    return quotes[i];
}

console.log(quoteGenerator());