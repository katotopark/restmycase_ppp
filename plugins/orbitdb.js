const IPFS = require('ipfs-http-client')
//Const IPFS = require('ipfs')
//const OrbitDB = require('orbit-db')
const ipfs = new IPFS('ipfs.infura.io', '5001', { protocol: 'https' })

ipfs.files.write(
  '/hello-world',
  Buffer.from('Hello, world! adsflklqllqqllq'),
  err => {
    console.log(err)
  }
)

/*
const ipfsOptions = {
  EXPERIMENTAL: {
    pubsub: true
  }
}
//const ipfs = IPFS(ipfsOptions)

console.log('ipfs', ipfs)*/

// ipfs.on('ready', async () => {
//   const orbitdb = new OrbitDB(ipfs)
//   const db = await orbitdb.log(
//     '/orbitdb/QmWBsAvQ5dsquYYo3C16us2Z7YG2pY4bchrkBhgf2AtmZy/connor'
//   )

/*  db.events.on('replicated', address =>
    db
      .iterator({ limit: -1 })
      .collect()
      .map(e => e.payload.value)
      .foreach(e => console.log(e))
  )
})*/
/*
const orbitdb = new OrbitDB(ipfs)
console.log('orbitdb', orbitdb)*/
const db = async () => {
  ipfs.files.read('/hello-world', (error, buf) => {
    console.log(buf.toString('utf8'))
  })

  /*console.log('awaiting log')
  try {
    const base = await orbitdb.log(
      '/orbitdb/QmWBsAvQ5dsquYYo3C16us2Z7YG2pY4bchrkBhgf2AtmZy/connor',
      { replicate: false }
    )
  } catch (e) {
    console.error('waiting for log failed', e)
  }

  console.log('base', base)

  base.events.on('replicated', address => {
    console.log('replicated')
    base
      .iterator({ limit: -1 })
      .collect()
      .map(e => e.payload.value)
      .foreach(e => console.log(e))
  })*/
  return 'hello world'
}
export default db
