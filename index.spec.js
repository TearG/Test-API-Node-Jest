const request = require("supertest")
const app = require('./server')

describe('Test My App server', () => {
	it('should get main route',  async () => {
		const res = await request(app).get('/')

    console.log(res)
		expect(res.statusCode).toEqual(200)
		expect(res.body).toHaveProperty('message')
	})
})

// Para rodar o Teste no Repl.it tem que colocar no shell a linha de comando: yarn jest.