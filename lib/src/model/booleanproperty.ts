import { AtomicProperty } from './atomicproperty';

export class BooleanProperty extends AtomicProperty {

  fallbackValue(): any {
    return null;
  }
}
