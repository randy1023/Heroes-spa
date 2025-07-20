import { heroes } from "../data/heroes";

/**
 * Descripción de la función.
 * @param {string} publisher - Nombre de la linea de esos superheroes.
 * @returns {Array} Un arreglo con los heroes que pertenecen al publisher.
 */
export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" is not valid. Valid publishers are: ${validPublishers.join(', ')}`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
};
