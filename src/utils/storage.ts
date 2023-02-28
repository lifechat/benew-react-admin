/**
 * 本地存储实现,封装localStorage和sessionStorage
 */

const store:any = {
    storage:window.localStorage,
    session:{
        storage:window.sessionStorage
    }
}

const api = {
    // set(key:any,val:any){
    //     if(this.disabled){
    //         return 
    //     }
    //     if(val === undefined){
    //         this.remove(key);
    //     }
    //     this.storage.setItem(key)
    // }
}

function serialize(val:any){
    return JSON.stringify(val);
}

function deserialize(val:any){
    if(typeof val  !== "string"){
        return undefined;
    }

    try {
        return JSON.parse(val)
    } catch (e) {
        return val || undefined
    }
}

Object.assign(store,api);
Object.assign(store.session,api);

try {
    
} catch (e) {
    store.disable = true;
}

export default store;