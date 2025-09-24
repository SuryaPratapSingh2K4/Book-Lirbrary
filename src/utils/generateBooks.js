import { faker } from "@faker-js/faker";

export const generateBooks = (count = 10000) => {
    const books = [];
    for(let i=0;i<count;i++){
        books.push({
            Title: faker.book.title(),
            Author: faker.book.author(),
            Genre: faker.music.genre(),
            PublishedYear: faker.date.past().getFullYear(),
            ISBN: faker.string.uuid(),
        });
    }
    return books;
};