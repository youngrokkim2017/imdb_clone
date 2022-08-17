import React from 'react';

const API_URL = OMDB_API_URL

const App = () => {
    const searchMovies = async () => {
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("The Emperor's New Groove")
    }, [])

    // console.log(API_URL)
    return (
        <div>
            <h1>App</h1>
            <div className="search-container">
                <input
                    placeholder="search for movies"
                    value="The Emperor's New Groove"
                    onChange={() => {}}
                />
            </div>
            <div>
                <div>
                    <div>
                        {/* Movie Details */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default App;
