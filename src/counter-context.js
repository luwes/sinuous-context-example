import { observable } from "sinuous";

export let CounterContext = createContext(0);

function createContext(defaultValue) {
  let ctx = {
    level: 0,
    contexts: []
  };

  function Provider(props, ...children) {
    const newContext = ctx.contexts[ctx.level];
    console.warn(111, ctx.level, ctx.contexts.length);
    ctx.level += 1;

    console.warn(children[0].children[0], props.value);

    // newContext.value(props.value);

    return () => {
      console.warn(444);
      return children;
    };
  }

  function Consumer(comp) {
    return (props, ...children) => {
      console.warn(222, ctx.level);
      return comp;
    };
  }

  return Object.assign(ctx, {
    Provider,
    Consumer,
    value: defaultValue
  });
}

export function useContext(ctx) {
  console.warn(333, ctx.level);
  let newContext = ctx.contexts[ctx.level];
  if (!newContext) {
    newContext = {
      value: function() {
        console.log(this);

        return observable(ctx.value);
      }
    };
    ctx.contexts.push(newContext);
  }
  return newContext.value;
}
