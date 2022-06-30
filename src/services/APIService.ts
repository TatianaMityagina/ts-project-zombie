import {localeStorageService} from "@/services/localeStorage";

export const APIService = {
    async get(key: string) {
        return localeStorageService.getJSON(key);
    },

    async post(path: string, data: Record<string, any>) {
        return localeStorageService.setJSON(path, data);
    }
}
