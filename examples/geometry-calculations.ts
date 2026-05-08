/** Area of a circle: πr² */
export function circleArea(radius: number): number {
    return Math.PI * radius ** 2;
}

/** Circumference of a circle: 2πr */
export function circleCircumference(radius: number): number {
    return 2 * Math.PI * radius;
}

/** Area of a rectangle */
export function rectangleArea(width: number, height: number): number {
    return width * height;
}

/** Area of a triangle given base and height */
export function triangleArea(base: number, height: number): number {
    return (base * height) / 2;
}

/** Area of a trapezoid */
export function trapezoidArea(
    parallelA: number,
    parallelB: number,
    height: number,
): number {
    return ((parallelA + parallelB) / 2) * height;
}

/** Surface area of a sphere: 4πr² */
export function sphereSurfaceArea(radius: number): number {
    return 4 * Math.PI * radius ** 2;
}

/** Volume of a sphere: (4/3)πr³ */
export function sphereVolume(radius: number): number {
    return (4 / 3) * Math.PI * radius ** 3;
}
