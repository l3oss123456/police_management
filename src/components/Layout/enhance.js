import { compose, withState } from "recompose";

export default compose(withState("isCollap", "setIsCollap", false));
