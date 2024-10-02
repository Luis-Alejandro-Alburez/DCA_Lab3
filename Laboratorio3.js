/***********  Laboratorio 3  ************
 * 
 * En este laboratorio deberás crear el objeto images y lo utilizarás
 * para almacenar imágenes.  El objeto "images" debe contener una propiedad
 * "list", que será una matriz de objetos de imagen y métodos:
 * 
 *    1.  contains -- toma como argumento el título de la imagen y retorna
 *                    true si la imagen ya está colocada en la lista 
 *                    (de lo contrario retorna false).
 *    2.  add      -- toma tres argumentos (title, artist, y date) y crea
 *                    un nuevo objeto basado en ellos y lo agrega a la lista
 *                    (si aún no se ha agregado).
 *    3.  show     -- que muestra todas las imágenes de la lista.
 *    4.  clear    -- que elimina todos los objetos de la lista.
 * 
 * Al crear el objeto, utilice el constructor Image preparado en la tarea
 * anterior
 * 
 * Pruebe el xcript llamando a la secuencia: 
 */

function Image(title, artist, date) {
    this.title= title;
    this.artist= artist;
    this.date= date;
}

function getImage(title, artist, date) {
    return {
        title: title,
        artist: artist,
        date: date
    };
}

let cuadros = [];

const images = {
    list: [],
    add: function(title, artist, date) {
        this.list.push({ title, artist, date });
    },

    contains: function(searchTitle) {
        return this.list.some(item => item.title === searchTitle);
    },

    show: function() {
        if (this.list.length === 0) {
            console.log("The list is empty.");
        } else {
            this.list.forEach(item => {
                console.log(`Title: ${item.title}, Artist: ${item.artist}, Date: ${item.date}`);
            });
        }
    },

    clear: function() {
        this.list = [];
        console.log("The list has been cleared.");
    }

};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();
