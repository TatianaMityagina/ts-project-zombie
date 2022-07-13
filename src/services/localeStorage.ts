export const localeStorageService = {
    set(key: string, value: string): void {
        return localStorage.setItem(key, value);
    },

    get(key: string): string | null {
        return localStorage.getItem(key);
    },

    delete(key: string): void {
        localStorage.removeItem(key);
    },

    getJSON<T = Record<string, null>> (key: string): T {
        const data = localeStorageService.get(key);
        if (!data) {
            throw new Error(`Element with key: ${key} not found in local storage`)
        }

        return JSON.parse(data)
    },

    setJSON(key: string, value: Record<string, any>) {
        this.set(key, JSON.stringify(value))
    },
};
