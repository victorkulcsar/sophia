import users from './users';
import companys from './companys'

export default {
  selectTeamsByManager(userId) {
    let squads = companys.selectCompanys();
    const teams = squads.company.chiefs[0].boards[0].managements[0].teams
      .filter(team => team.owners.find(owner => owner === userId));

      return teams.map(squad => ({
        ...squad,
        members: squad.members.map(user => {
          const data = users.selectByUser(user)
          if (!data) {
            return undefined
          }

          return {
            id: data.id,
            name: data.name,
            knowledge: data.knowledge
          }
        })
    }));
  },
}