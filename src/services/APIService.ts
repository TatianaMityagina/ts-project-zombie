import {localeStorageService} from "@/services/localeStorage";

export const APIService = {
    async get(key: string): Promise<Record<string, any>> {
        return localeStorageService.getJSON(key);
    },

    async post(path: string, data: Record<string, any>): Promise<void> {
        return localeStorageService.setJSON(path, data);
    }
}
