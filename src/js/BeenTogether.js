import { initialRender } from "./core/initialRender";
import { listener } from "./core/listener";

class Been {
    init() {
        initialRender();
        listener();
    }
}

export default Been;