export function EnumToArray(object: any): { name: string, value: any }[] {
    const arrayObjects = [];

    for (const [propertyKey, propertyValue] of Object.entries(object)) {
        if (!Number.isNaN(Number(propertyKey))) {
            continue;
        }
        arrayObjects.push({ name: propertyKey, value: propertyValue });
    }
    return arrayObjects;
}