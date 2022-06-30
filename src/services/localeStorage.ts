export const localeStorageService = {
    set(key: string, value: string) {
        return localStorage.setItem(key, value);
    },

    get(key: string) {
        return localStorage.getItem(key);
    },

    delete(key: string) {
        localStorage.removeItem(key);
    },

    getJSON(key: string) {
        const data = localStorage.getItem(key) || '{}';
        return JSON.parse(data)
    },

    setJSON(key: string, value: Record<string, any>) {
        this.set(key, JSON.stringify(value))
    },
};
