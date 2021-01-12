import api from "@/api/api";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $api: any;
        $utils: any;
        $store: any;
        getList: Function;  // 获取列表
        setPageSize: Function;  // 设置页码
        setDate: Function;    // 设置选择日期
    }
}

declare global {
    interface Window { $api: api }
}