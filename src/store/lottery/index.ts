import { ResultPageJSON } from '@/store/types'

const lottery = {
    namespaced: true,
    state: () => ({
        list: [],   // 列表数据
        total: 1,    // 页码
        pageSize: 10,
    }),
    mutations: {
        getList(state: any, data: ResultPageJSON) {
            state.list = data.data
            state.total = data.total
        },
        setPageSize(state: any, pageSize: number) {
            state.pageSize = pageSize
        }
    },
    actions: {
        async getList(context: any, params: any) {
            if (params && params.pageSize) {
                context.commit('setPageSize', params.pageSize)
            }
            const { pageSize } = context.state
            console.log(pageSize)
            const result = await window.$api.lotteryList({ ...params, pageSize });
            context.commit('getList', result)
        }
    },
    getters: {}
}

export default lottery