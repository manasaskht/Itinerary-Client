const storageKeys = {
    userInfo: 'userInfo'
}

export class StorageHelper {

    private static storageHelper: StorageHelper;

    private constructor() { }

    public static getInstance(): StorageHelper {
        if (!StorageHelper.storageHelper) {
            StorageHelper.storageHelper = new StorageHelper();
        }
        return StorageHelper.storageHelper;
    }

    set userInfo(info: any) {
        localStorage.setItem(storageKeys.userInfo, JSON.stringify(info));
    }
    get userInfo(): any {
        return JSON.parse(localStorage.getItem(storageKeys.userInfo));
    }

    clear() {
        localStorage.clear();
    }
}
