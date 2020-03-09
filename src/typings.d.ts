/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.scss' {
    const content: { [ className: string ]: string };
    export default content;
}

interface SvgComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {
}

declare module '*.svg' {
    const svgUrl: string;
    const svgComponent: SvgComponent;
    export default svgUrl;
    export { svgComponent as ReactComponent }
}

declare module "*.png" {
    const value: any;
    export default value;
}
