const uiModule = (function () {

    const DOMSelectors = {
        divShowHolder: ".show-holder",
        divContainer: "main .container",
        ulSeason: ".season ul",
        ulCast: ".cast ul",
        inputSearch: "input",
        divSearchResult: ".search-result",
        divTitle: ".title",
        divSingleShowInfo: ".single-show-info",
        divSummary: ".summary",
        aLogo: ".navbar-brand",
        divAlertDanger: ".alert-danger",
        divAlertDark: ".alert-dark"
    };



    const $searchResultElement = $(DOMSelectors.divSearchResult);
    const $container = $(DOMSelectors.divContainer);
    const $inputElement = $(DOMSelectors.inputSearch);
    const $showHolderElement = $(DOMSelectors.divShowHolder);
    const $title = $(DOMSelectors.divTitle);
    const $singleShowInfo = $(DOMSelectors.divSingleShowInfo);
    const $summary = $(DOMSelectors.divSummary);
    const $alert = $(DOMSelectors.divAlertDark);



    const displayShows = listShows => {
        clearErrors();
        $showHolderElement.html("");
        $title.html(`<h1>Popular Shows</h1>`);
        if (listShows.length === 0) {
            $alert.html("No Results Found");
            $alert.css("display", "block");
            clearInput();
            return;
        }
        listShows.forEach(({ id, title, cover }) => {
            const $showElement = $(`
                <div class="col-md-6 col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${cover}" alt="Card image cap">
                    <div class="card-body">
                    <a href="show_info.html" id="${id}">${title}</a>
                    </div>
                    </div>
                </div>`)
            $showHolderElement.append($showElement);
        });
        $searchResultElement.css("display", "none");
        clearInput();
    }



    const setLocalStorageShowId = event => {
        const id =  $(event.target).attr("id");
        window.localStorage.setItem('showId', id);
    }

    const clearErrors = () => {
        $alert.html("");
        $alert.css("display","none");
    }



    const clearInput = () => {
        $inputElement.val("");
    }

    const formPreventDefault = () => {
        $(window).keydown(function(event){
            if(event.keyCode == 13) {
              event.preventDefault();
              return false;
            }
          });
    }



    const displayShowInfo = ({id, title, cover, seasons, cast, summary}) => {
        clearErrors();
        $title.html(`<h1>${title}</h1>`);

        $singleShowInfo.html(`
                <div class="col-md-7">
                    <img src="${cover}" alt="" class="img-fluid poster">
                </div>
                <div class="col-md-4 offset-md-right-1 show-info">
                    <div class="season">
                        <h2>Seasons (${seasons.length})</h2>
                        <ul>

                        </ul>
                    </div>
                    <div class="cast">
                        <h2>Cast</h2>
                        <ul>

                        </ul>
                    </div>
                </div>
            `);
        const $ulSeasonElement = $(DOMSelectors.ulSeason);
        const $ulCastElement = $(DOMSelectors.ulCast);
        seasons.forEach(season => {
            let $liElement = $('<li>').text(season);
            $ulSeasonElement.append($liElement);
        });
        cast.forEach(actor => {
            let $liElement = $('<li>').text(actor);
            $ulCastElement.append($liElement);
        });
        $summary.html(`
                <div class="col-12 details">
                    <h2>Show Details</h2>
                    <p>${summary}</p>
                </div>
        `)
        $searchResultElement.css("display", "none");
        clearInput();
    }



    const collectInputData = () => {
        return $inputElement.val();
    }



    const displaySearchedList = showList => {
        if (!showList.length) {
            return $searchResultElement.css("display","none");
        }
        $searchResultElement.css("display","block");
        const $ulElement = $searchResultElement.find('ul');
        $ulElement.html("");
        showList.forEach(({id, title}) => {
            const $liElement = $(`<li><a href="show_info.html" id="${id}">${title}</a></li>`);
            $ulElement.append($liElement);
        })
    }



    const displayError = error => {
        $alert.html(error);
        $alert.css("display", "block");
    }





    return {
        DOMSelectors,
        displayShows,
        setLocalStorageShowId,
        displayShowInfo,
        collectInputData,
        displaySearchedList,
        displayError,
        formPreventDefault
    }


})();
