var dataModule = (function () {

    class Show {
        constructor(id, title, cover) {
            this.id = id;
            this.title = title;
            this.cover = cover;
            this.seasons = [];
            this.cast = [];
            this.summary;
        }
    }

    const fetchShows = (successCb, failCb) => {
        $.ajax({
            method: 'GET',
            url: 'http://api.tvmaze.com/shows'
        })
            .done(res => {
                const listShow = res.slice(0, 50)
                    .map(({ id, name, image }) => {
                        return new Show(id, name, image.original);
                    });
                successCb(listShow);
            })
            .fail(() => {
                const err = "Network problem, try again later."
                failCb(err);
            });
    }

    const fetchShowInfo = (successCb, failCb) => {
        const id = window.localStorage.getItem("showId");
        $.ajax({
            method: "GET",
            url: `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
        })
            .done(res => {
                const imageSrc = res.image
                    ? res.image.original
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmhOQIdkehQclCNlvATZe4QCQoaBPRVftOSbW0E4xxnWmvc4r8Q";
                const show = new Show(res.id, res.name, imageSrc);
                show.summary = res.summary;
                res._embedded.seasons.forEach(({ premiereDate, endDate }) => {
                    const seasonString = (premiereDate && endDate)
                        ? `${premiereDate} - ${endDate}`
                        : "Data Not Available";
                    show.seasons.push(seasonString);
                });
                res._embedded.cast.forEach(({person}) => {
                    show.cast.push(person.name);
                });
                successCb(show);
            })
            .fail(() => {
                const err = "Network problem, try again later."
                failCb(err);
            });
    }

    const fetchSearchedShows = (searchValue, successCb, failCb) => {
        $.ajax({
            method: 'GET',
            url: `http://api.tvmaze.com/search/shows?q=${searchValue}`
        })
        .done(res => {
            const listShow = res.map(({ show }) => {
                const imageSrc = show.image
                    ? show.image.original
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmhOQIdkehQclCNlvATZe4QCQoaBPRVftOSbW0E4xxnWmvc4r8Q";

                    return new Show(show.id, show.name, imageSrc );
            });

            successCb(listShow);
        })
        .fail(() => {
            const err = "Network problem, try again later."
            failCb(err);
        });
    }



    return {
        fetchShows,
        fetchShowInfo,
        fetchSearchedShows
    }


})();
