import { api } from "sinuous";

const pipe = (f, g) => (...args) => g(...f(...args));

api.insert = pipe(enableTracking, api.insert);
api.property = pipe(enableTracking, api.property);

let tracking = {};

function enableTracking(el, value, ...args) {
  if (typeof value !== "function") {
    return [el, value, ...args];
  }

  function tracker(...args) {
    const prevTracking = tracking;
    tracking = tracker._tracking;
    const result = value(...args);
    tracking = prevTracking;
    return result;
  }
  tracker._tracking = { ...tracking };

  return [el, tracker, ...args];
}

let uniqueId = 0;

export function createContext(defaultValue) {
  const id = uniqueId++;

  function Provider(props, observer) {
    function update() {
      const prevTracking = tracking[id];
      tracking[id] = update;
      const result = observer();
      tracking[id] = prevTracking;
      return result;
    }

    update._ctx = {
      value: (props && props.value) || defaultValue
    };
    return update;
  }

  return {
    id,
    Provider,
    defaultValue
  };
}

export function useContext(ctx) {
  return (
    (tracking && tracking[ctx.id] && tracking[ctx.id]._ctx.value) ||
    ctx.defaultValue
  );
}
