import { NextFunction, Request, Response, Router } from 'express';
import { twitterServiceProvider } from './serviceProviders/APIs/twitterServiceProvider';
const router = Router();


router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    return res.send({ a: 1 });
});


/**
 * slack url
 */
router.post('/api/slack/message', async (req: Request, res: Response, next: NextFunction) => {
    let { challenge, type, event } = req.body;

    if (type === 'url_verification')
        return res.send(challenge);

    if (!(event && event.type === 'message'))
        return res.send({});

    // get the event text
    let { text } = event;

    if (text.toLowerCase() === 'go') {
        let twitterProvider = new twitterServiceProvider();
        await twitterProvider.saveTweets();
        console.log('He said GO');
        // do some twitter action here
    }

    return res.send({});
});


export = router;