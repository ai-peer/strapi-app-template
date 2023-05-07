import { defineAsyncComponent } from "vue";

export function naiveui(component) {
  return defineAsyncComponent(async () => {
    //const component = "NConfigProvider";
    if (import.meta.env.SSR) {
      return <template use-component={component}></template>;
    }
    const lib = await import("naive-ui").then((lib) => {
      return { ...lib };
    });
    const wrap = lib[component];
    return <wrap> </wrap>;
  });
}
