import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore('user', {
          state() {
          const authInfo = ref<{ token:string }|null>(null)

        return {
      authInfo,
    }
  },
  actions: {
async login(params: {
        mobile: string
        verifyCode: string
  }) {
      const data = await Promise.resolve({
        token: 'xxx'
    })
          this.authInfo = data
  return data
  },
},
})
