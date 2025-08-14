import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";


import { useForm } from "../../hooks"
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";


export const SearchHeroes = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { q = '' } = queryString.parse(search);
  const heroes = getHeroesByName(q);
  const { onInputChange, searchText } = useForm({
    searchText: q
  });
  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    console.log({ searchText })
    navigate(`?q=${searchText.toLowerCase().trim()}`);

  }
  return (
    <>
      <h1>SearchHeroes</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero..."
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroes.length === 0 && q.length === 0 && <div className="alert alert-primary animate__animated animate__fadeIn">
            Search a hero
          </div>}
          {heroes.length === 0 && q.length > 0 && <div className="alert alert-danger animate__animated animate__fadeIn">
            No hero with <b>{q}</b>
          </div>}

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>

    </>
  )
}
