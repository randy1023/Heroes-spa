import { useMemo } from "react";
import PropTypes from "prop-types";
import { HeroCard } from "../components";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {heroes.map(hero => (
                <HeroCard
                    key={hero.id}
                    {...hero}

                />
            ))}
        </div>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
};