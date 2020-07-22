import path from 'path'
import fs from 'fs';

export default {
  JsonByModelo() {
    return require('../data/modelo.json');
  },

  JsonByUser(id) {
    return require(`../data/${id}.json`);
  },

  file(id) {
    return `${path.resolve(__dirname, `../data/${id}.json`)}`;
  },

  findDataById(id) {
    const { data: modelo } = this.JsonByModelo();
    const user = this.JsonByUser(id);

    const data = modelo.map(item => {
      item.conhecimento = user[`${item.id}`] || 0;
      return item
    });
    
    if (!data) {
      return { data: [] }
    } 
  
    return data
  },

  writeFile(userId, id, nivel) {
    const data = this.JsonByUser(userId)
    data[`${id}`] = parseInt(nivel);

    fs.writeFileSync(
      this.file(userId), 
      JSON.stringify(data)
    );

    return data;
  }
  
}