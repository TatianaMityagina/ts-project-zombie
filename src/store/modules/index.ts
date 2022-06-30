import {ModuleTree} from "vuex";
import {RootState} from "@/store/types";

const context = require.context('@/store/modules', true, /module\.ts$/);
const modules: ModuleTree<RootState> = {};

context.keys().forEach((file) => {
    // create the module name from file
    const moduleName = file
        .split('/')[1]
        .split('.')[0]

    modules[moduleName] = context(file).default || context(file);
    modules[moduleName].namespaced = true;
});

export default modules;
