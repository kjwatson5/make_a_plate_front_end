let token = 'f705c08aefbb99cc664de68f34c25bc1afefa4322aafe373'

export const server_calls = {
    get: async() => {
        const response = await fetch(`https://amplified-fuzzy-store.glitch.me/api/food`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://amplified-fuzzy-store.glitch.me/api/food`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://amplified-fuzzy-store.glitch.me/api/food/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string, data: any = {}) => {
        const response = await fetch(`https://amplified-fuzzy-store.glitch.me/api/food/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}
