
var films = [
    {
        id: 1,
        title: 'Blade Runner',
        desc: 'Czy androidy śnią o elektrycznych owcach?',
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg'
    },
    {
        id: 2,
        title: 'Total Recall',
        desc: 'Przypomnimy to panu hurtowo',
        poster: 'https://m.media-amazon.com/images/M/MV5BYzU1YmJjMGEtMjY4Yy00MTFlLWE3NTUtNzI3YjkwZTMxZjZmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SY1000_CR0,0,673,1000_AL_.jpg'
    }
];

var MovieTitle = React.createClass({
    propTypes: {title: React.PropTypes.string.isRequired},
    render: function() {
        return (React.createElement('h2', {}, this.props.title))
    }
});

var MovieDescription = React.createClass({
    propTypes: {desc: React.PropTypes.string.isRequired},
    render: function() {
        return (React.createElement('p', {}, this.props.desc))
    }
});

var MoviePoster = React.createClass({
    propTypes: {poster: React.PropTypes.object.isRequired},
    render: function() {
        return (React.createElement('img', {src: this.props.poster}))
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement('li', {}, 
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {desc: this.props.movie.desc}),
                React.createElement(MoviePoster, {poster: this.props.movie.poster})
            )
        )
    }
});

var movieList = films.map(function(movieData) {
    return React.createElement(Movie, {key: movieData.id, movie: movieData})
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista Filmów'),
    React.createElement('ul', {}, movieList)
);


ReactDOM.render(element, document.getElementById('app')); 