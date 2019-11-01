export default class User {
    constructor(){
        this.users = [{
            id: 1,
            name :'ravy',
            pass : '123'
        },
        {
            id: 2,
            name :'user',
            pass : 'user'
        },  {
        id: 3,
            name :'Admin',
            pass : 'Admin'
        }];
    
    }
    Auth(user,pass){

      return this.users
      .filter((item)=> item.name.toUpperCase() == user.toUpperCase()&&item.pass == pass)
      .map((item)=>{return {name:item.name, id: item.id}}
        );
    }
}
