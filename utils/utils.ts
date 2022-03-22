export const throttle = (func: (args: any) => void, wait: number = 100) => {
    let timer: NodeJS.Timeout | null = null;
    return (...args: any) => {
        if (timer === null) {
            timer = setTimeout(() => {
                func.apply(this, args);
                timer = null;
            }, wait);
        }
    };
};

export const easeIn = (percent: number) => Math.pow(percent, 1.675);