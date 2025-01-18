// src/types/pinia-plugin-persistedstate.d.ts
import "pinia";

declare module "pinia" {
  export interface DefineStoreOptionsBase<S, Store> {
    persist?: boolean | PersistedStateOptions;
  }
}
