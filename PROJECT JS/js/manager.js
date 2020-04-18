class Manager {
    constructor() {}
    static get instance() {
        if (!Manager._instance) {
            Manager._instance = new Manager();
        }
        return Manager._instance;
    }
    initProject() {
        let login = new Login;
        login.getLogin((result)=>{
           if (result) {
               new MenuBar;
               new Student;
           } 
        });
    }
} 