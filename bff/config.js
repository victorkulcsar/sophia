const env = { 
  production: {
    port: 21188
  },
  development: {
    port: 3000
  }
} 

console.log(process.env.staging)
export default env[process.env.staging || "development"];