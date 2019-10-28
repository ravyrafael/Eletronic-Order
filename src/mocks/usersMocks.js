export default class user {
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
    auth(user,pass){
      return this.users.filter((item)=> item.name.toUpperCase() == user.toUpperCase()&&item.pass == pass);
    }
}
