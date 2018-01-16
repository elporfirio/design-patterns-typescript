import {PS4GameFactory, XBOXGameFactory} from "./factory_clases";

export class GameMaker {
    public constructor() {
        const ps4Game = new PS4GameFactory();
        this.tester(ps4Game);

        const xboxGame = new XBOXGameFactory();
        this.tester(xboxGame);
    }

    tester(game) {
        const cover = game.makeCover();
        const disc = game.makeDisc();

        console.log('==============');

        console.log(cover.getPaperType());
        console.log(cover.getSize());

        console.log(disc.getGenre());
        console.log(disc.getTitle());

        console.log('==============');
    }
}