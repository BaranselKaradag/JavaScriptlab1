const library={
    title:'title',
    author:'author',
    status:{
        own:true,
        reading:false,
        read:false,

    }
};


library.status.read=true;

const { title: firstBook } = library[0];
console.log(firstBook);

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);