import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDataNews } from '../../types';


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
            .addEventListener('click', (e) => this.controller.getNews(e, (data?: IDataNews | undefined) => this.view.drawNews(data)));
        this.controller.getSources((data?: IDataNews| undefined) => this.view.drawSources(data));
    }
}

export default App;
