const composers = ["Mozart", "Beethoven", "Mahler", "Debussy", "Stranvinsky", "Schumann", "Copland"];
const verbs = ["leaped over", "leered at", "smelled", "drew", "sniffed", "beguiled", "composed", "conducted", "pranced around"];
const objects = ["3 delicious hoagies.", "a gaudy mansion.", "a scintillating pond.", "a vibrant meadow.", "an entire apple orchard.", "a roll of parchment.", "the Misty Mountains.", "a large piece of sophisticated machinery."];

const quoteGenerator = () => {
    let i = Math.floor(Math.random() * 7)
    let j = Math.floor(Math.random() * 9)
    let k = Math.floor(Math.random() * 8)
    //console.log(i);
    const quote = `${composers[i]} ${verbs[j]} ${objects[k]}`
    return quote;
}

console.log(quoteGenerator());