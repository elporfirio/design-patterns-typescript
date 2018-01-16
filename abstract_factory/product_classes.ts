/**
 * Game Products Classes
 */
export abstract class AbstractDisc {
    abstract getTitle();

    abstract getGenre();
}

export abstract class AbstractCover {
    abstract getSize();

    abstract getPaperType();
}

abstract class AbstractCallOfDuty {
    private gameSeries = 'Call of Duty';

    getGameSeries() {
        return this.gameSeries;
    }
}

export class CallOfDutyDisc extends AbstractCallOfDuty implements AbstractDisc {
    private title = 'Modern Warfare';
    private genre = 'FPS';

    getTitle() {
        return this.title;
    }

    getGenre() {
        return this.genre;
    }
}

export class CallOfDutyCover extends AbstractCallOfDuty implements AbstractCover {
    private size = '4x6';
    private paperType = 'couche';

    getSize() {
        return this.size;
    }

    getPaperType() {
        return this.paperType;
    }
}