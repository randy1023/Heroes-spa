import { heroes } from "../data/heroes";

/**
 * Descripción de la función.
 * @param {string} id - id de un heroe en especifico.
 * @returns {Object | undefined} Un objecto con la informacion del id  o undefined.
 */
export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);

}