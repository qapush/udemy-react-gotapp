export default class GotService {
    
    constructor(){
        this._apiBase = 'https://anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}` + ` received ${res.status}`)
        }
        
        return await res.json();
    }

    async getAllCharacters(){
        const result = await this.getResource(`/characters?page=1&pageSize=10`);
        return result.map(this._transformCharacter)
    }

    async getCharacter(id){
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character)

    }

    getAllHouses(){
        return this.getResource(`/houses?page=1&pageSize=10`);
    }

    getHouse(id){
        return this.getResource(`/houses/${id}`);
    }

    getAllBooks(){
        return this.getResource(`/books?page=1&pageSize=10`);
    }

    getBook(id){
        return this.getResource(`/books/${id}`);
    }

    _transformCharacter(char){
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouses(house){
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBooks(book){
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}