import { Details } from "./details.module.js";
import { Display } from "./ui.module.js";

export class Games {

    constructor() {
        this.getGames('mmorpg'); 

        //? I tried to make this function using Jquary , it doesn't work ??  
        document.querySelectorAll("ul a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector("ul .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.innerHTML);
            });
        });
        
        this.display = new Display();

    }

    async getGames(category) {
        $('.loading').removeClass('d-none');
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "349cec4762mshe4b9720ddc56034p1ccafcjsn1941009e7a51",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const gamesRes = await api.json();
        
        this.display.categoryGames(gamesRes);
        this.cardEvent();
        console.log(gamesRes);
        $('.loading').addClass('d-none');
    }

    cardEvent() {

        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
                const gameId = item.dataset.id;
                this.showGameDetails(gameId);
            });
        });
        
        //! doesn't work 
        // $('#gameData').on('click', '.card', function () {
        //     const gameId = $(this).attr('game-id');
        //     this.showGameDetails(gameId);
        // });
    }

    showGameDetails(gameInfo) {
        const details = new Details(gameInfo);
        $('#games').addClass('d-none');
        $('.details').removeClass('d-none');
    }
}
