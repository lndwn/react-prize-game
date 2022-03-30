declare module "*.gif" {
  const url: string;
  export default url;
}

declare module "*.png" {
  const url: string;
  export default url;
}

declare module "*.mp3" {
  const url: string;
  export default url;
}

declare module "*.svg" {
  const ReactComponent: React.StatelessComponent<React.SVGAttributes<
    SVGElement
  >>;
  export { ReactComponent };
}
