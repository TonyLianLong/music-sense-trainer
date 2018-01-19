export const ACTION_KEY_DOWN = "KEY_DOWN";
export const ACTION_KEY_UP = "KEY_UP";

export function keyDown(key) {
  return {type: ACTION_KEY_DOWN, key};
}

export function keyUp(key) {
  return {type: ACTION_KEY_UP, key};
}
