
export class Display {

    categoryGames(info) {
        let box = '';
        for (let i = 0; i < info.length; i++) {
            box += `
            <div class="col">
            <div class="card bg-transparent h-100" data-id="${info[i].id}">
            <img src="${info[i].thumbnail}" class="card-img-top" alt="game image">
            <div class="card-body">
            <div class="hstack justify-content-between mb-3">
            <h6 class="title text-light" id="title">${info[i].title}</h6>
            <a class="btn btn-primary text-capitalize" href="${info[i].game_url}" target="_blank">free</a>
            </div>
            <p class="text-white-50 text-center" id="s-description">${info[i].short_description}</p>
            </div>
            <div class="card-footer small hstack justify-content-between">
            <span class="text-bg-secondary px-2 m-0 rounded-pill">${info[i].genre}</span>
            <span class="text-bg-secondary px-2 m-0 rounded-pill">${info[i].platform}</span>
            </div>
            </div>
            </div>
            `;
        }

        $('#gameData').html(box);
        // $(".loading").addClass("d-none");
        // $('#games').removeClass('d-none');
    }

    gameDetails(info) {
        const content = `
        <div class="col-md-4">
        <img src="${info.thumbnail}" class="w-100" alt="image details" />
        </div>
        <div class="col-md-8">
        <h3>Title : <span class="text-info">${info.title}</span></h3>
        <p>Category : <span class="badge text-bg-info"> ${info.genre}</span> </p>
        <p>Platform : <span class="badge text-bg-info"> ${info.platform}</span> </p>
        <p>Status : <span class="badge text-bg-info"> ${info.status}</span> </p>
        <p class="text-white-50">${info.description}</p>
        <a class="btn btn-outline-info" target="_blank" href="${info.game_url}">Show Game</a>
        </div>
        `;

        $('#gameDetails').html(content);

        // $(".loading").addClass("d-none");
        // $('#games').removeClass('d-none');
    }
}

