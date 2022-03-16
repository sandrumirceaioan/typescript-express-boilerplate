import path from 'path';


const testController = (req, res, next) => {
    try {
        console.log('TEST CONTROLLER');
        res.sendFile(path.join(__dirname, '../views', 'test.html'));
    } catch (error) {
        console.log(error);
        res.status(500).send('TEST ERROR');
    }

};

export {
    testController
}