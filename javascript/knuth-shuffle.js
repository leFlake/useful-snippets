/**
 * Shuffle an array using the Knuth shuffle algorithm (or Fisher-Yates shuffle, depending
 * on what you like :p)
 *
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 *
 * @param array
 * @returns {*}
 */
function shuffleArray(array) {
    for(var i = 0; i < array.length-1; i++) {
        var j = Math.floor(Math.random() * array.length-i);
        var array_temp = array[i];
        array[i] = array[i+j];
        array[i+j] = array_temp;
    }
    return array;
}
