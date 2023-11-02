import { Display } from "./ui.module.js";

export class Details {
    
    constructor(gameId) {
        
        this.display = new Display();

        $("#btnClose").click(function () { 
            $('#games').removeClass('d-none');
            $('.details').addClass('d-none');
        });

        this.getGameDetails(gameId);
    }

    async getGameDetails(gameInfo) {
        $('.loading').removeClass('d-none');

        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "349cec4762mshe4b9720ddc56034p1ccafcjsn1941009e7a51",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };

        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameInfo}`, options)
        .then((response) => response.json())
        .then((response) => this.display.gameDetails(response))
        .catch((err) => console.error(err))
        .finally(() => {
        $('.loading').addClass('d-none');
        });
        
        //! doesn't work 
        // const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameInfo}`, options);
        // const gameDetails = await api.json();
        // this.display.gameDetails(gameDetails);

    }
}
