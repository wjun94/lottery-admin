import { ResultPageJSON } from '@/store/types'

const lottery = {
    namespaced: true,
    state: () => ({
        list: [],   // 列表数据
        total: 1,    // 页码
        pageSize: 10,
        date: [new Date(), new Date()], // 搜索时间
    }),
    mutations: {
        getList(state: any, data: ResultPageJSON) {
            state.list = data.data
            state.total = data.total
        },
        setPageSize(state: any, pageSize: number) {
            state.pageSize = pageSize
        },
        setDate(state: any, date: Date[]) {
            state.date = date
        }
    },
    actions: {
        async getList(context: any, params: any) {
            if (params && params.pageSize) {
                context.commit('setPageSize', params.pageSize)
            }
            const { pageSize, date } = context.state
            const [starAt, endAt] = date
            const result = await window.$api.lotteryList({ starAt, endAt, ...params, pageSize });
            context.commit('getList', result)
        }
    },
    getters: {}
}

export default lottery