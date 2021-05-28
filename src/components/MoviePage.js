import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import Loader from './Loader/Loader'
import MovieCard from './MovieCard'
import NoMoviesFound from './NoMoviesFound'

export default function MoviePage() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY

  useEffect(() => {
    const getDefaultMovies = async () => {
      setLoading(true)
      const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Dark Knight`, {
        headers: { Accept: "application/json" },
      });
      const parsedData = await response.json();
      setMovies(parsedData.Search);
      setLoading(false)
    };
    getDefaultMovies()
  }, [])

  const getMovies = async () => {
    setLoading(true)
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`, {
      headers: { Accept: "application/json" },
    });
    const parsedData = await response.json();
    if (parsedData) {
      setMovies(parsedData);
    } else {
      setMovies([])
    }
    setLoading(false);
  };

  return (
    <div className="main-page-content">
      <h1 className="main-header">Moviflix</h1>
      <Form className="search-form"
        onChange={(e) => {
          e.preventdefault()
          getMovies()
        }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Movies"
            aria-label="Search Movies"
            onChange={(e) => setSearch(e.target.value)}
            value={setSearch}
            required
          />
          <InputGroup.Append>
            <Button type="" variant="secondary">
              Search
              </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {
        !movies ?
          <NoMoviesFound /> :
          ( !loading ? 
            (
              <Loader />
            ) : (
              <Row className="movie-container">
                {movies.map((movie) => {
                  return (
                    <Col
                      key={movie.imdbID}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      className="mb-4"
                    >
                      <MovieCard movies={movie} />
                    </Col>
                  );
                })}
              </Row>
            )
          )
      }
    </div>
  )
}

