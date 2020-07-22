const env = { 
  production: {
    port: 21198
  },
  development: {
    port: 3000
  }
} 

console.log(process.argv)
export default env[process.argv[2] || "development"];