import { heroes } from "../data/heroes";

/**
 * Descripción de la función.
 * @param {string} name - nombre de el Heroe.
 * @returns {Array } Un array de los heroes que existe con el nombre.
 */
export const getHeroesByName = (name = '') => {
    const cleanName = name.toLocaleLowerCase().trim();
    if (cleanName.length === 0) return [];
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(cleanName));

}