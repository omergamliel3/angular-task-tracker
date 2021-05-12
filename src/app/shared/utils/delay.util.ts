export async function delay(time: number): Promise<void> {
    await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, time);
    });
}