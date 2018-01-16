import { CallOfDutyCover, CallOfDutyDisc} from "./product_classes";

/**
 * Game Factory Classes
 */
export abstract class AbstractGameFactory {
    abstract makeDisc();

    abstract makeCover();
}

export class PS4GameFactory extends AbstractGameFactory {
    private brand = 'Sony';

    makeDisc() {
        return new CallOfDutyDisc();
    }

    makeCover() {
        return new CallOfDutyCover();
    }
}

export class XBOXGameFactory extends AbstractGameFactory {
    private brand = 'Microsoft';

    makeDisc() {
        return new CallOfDutyDisc;
    }

    makeCover() {
        return new CallOfDutyCover;
    }
}




