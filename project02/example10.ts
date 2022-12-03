export {};

type PoemWithPages = { name: string; pages: number };
type PoemWithRhymes = { name: string; rhymes: boolean };

type Poem = PoemWithPages | PoemWithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };

if ("pages" in poem) {
  poem.pages;
} else {
  poem.rhymes;
}
