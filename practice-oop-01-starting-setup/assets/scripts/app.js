class Tooltip {

}

class ProjectItem {
    constructor(id) {
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton() {}

    connectSwitchButton() {
        const projectItem
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        
        for (const projectItem of projectItems) {
            this.projects.push(new ProjectItem(projectItem.id));
        }
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }
}

App.init();