import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDataNews } from '../../types';
interface IAppController {
    getSourses: (callback: () => void) => void,
    getNews: (e: Event, callback: ()=>void)=>void
}

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e) => this.controller.getNews(e, (data: IDataNews) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
