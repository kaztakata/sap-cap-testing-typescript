process.env.CDS_TYPESCRIPT = 'true'

import cds from '@sap/cds/lib'
const project = __dirname + '/..'
const {GET, expect} = cds.test(project)

describe('Hello world', function () {
  it('should work', async () => {
    const {data} = await GET `odata/v4/say/hello(to='world')`
    expect(data.value).to.equal('Hello world')})
})
