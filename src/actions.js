export const ACTION_KEY_DOWN = "KEY_DOWN";
export const ACTION_KEY_UP = "KEY_UP";
export const ACTION_NEXT_ROUND = "NEXT_ROUND";

export function keyDown(key) {
  return {type: ACTION_KEY_DOWN, key};
}

export function keyUp(key) {
  return {type: ACTION_KEY_UP, key};
}

export function nextRound() {
  return {type: ACTION_NEXT_ROUND};
}
