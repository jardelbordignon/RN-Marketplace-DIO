// baseUrl: 'http://localhost:3000' // Mac OS
// baseUrl: 'http://10.0.2.2:3000' // Emulador Android
// baseUrl: 'http://10.0.3.2:3000' // Android
// baseUrl: 'http://198.168.15.22:3000' // UBS

//  json-server server.json -w --host 0.0.0.0
// assim consegui acessar o meu ip

import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.103:3000'
})

export default api