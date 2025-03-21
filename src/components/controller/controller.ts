import AppLoader from './appLoader';
import { Endpoints } from '../../types';
import { IDataNews } from '../../types';

class AppController extends AppLoader {
    public getSources(callback: (data?: IDataNews | undefined) => void) {
        super.getResp(
            {
                endpoint: Endpoints.SOURCES,
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data?: IDataNews | undefined) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId!);
                    super.getResp(
                        {
                            endpoint: Endpoints.EVERYTHING,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }

            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
