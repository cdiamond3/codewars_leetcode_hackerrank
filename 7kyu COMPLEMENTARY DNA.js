// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input: output)

// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA" 


function DNAStrand(dna) {
    return dna
        .replace(/A/g, "t")
        .replace(/T/g, "a")
        .replace(/G/g, "c")
        .replace(/C/g, "g")
        .toUpperCase()
}